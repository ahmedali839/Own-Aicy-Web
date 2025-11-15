import accountUsers from "../models/user.model.js"
import { validationResult } from "express-validator"
import { createUser } from "../services/user.service.js"
import { OAuth2Client } from "google-auth-library"; // ✅ ADD THIS LINE
import axios from "axios"

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


export const registerUser = async (req, res, next) => {
    try {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        let { name, email, password } = req.body
        email = email.toLowerCase()

        const isUserAlreadyExists = await accountUsers.findOne({ email })
        if (isUserAlreadyExists) {
            return res.status(404).json({ message: "Email already exists, try another one" })
        }

        const hashed = await accountUsers.hashPassword(password)

        // send data to service file to store into model of MongoDB
        const user = await createUser({
            name,
            email,
            hashed,
            provider: "local",
        })

        const token = user.generateJwtToken()

        res.status(200).json({ token, user })
    } catch (error) {
        console.error("Error in registerUser: ", error)
        res.status(500).json({ message: "Internal Server error", error: error.message })

    }
}


export const loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        let { email, password } = req.body
        email = email.toLowerCase()

        const user = await accountUsers.findOne({ email }).select("+password")
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" })
        }


        if (!user.password && user.provider !== "local") {
            return res.status(400)
                .json({ message: `You need to signup or login with ${user.provider} as previously you did, then must create password over there to enable manual login. ` });
        }
        // You signed up with Google. Please create a password to enable manual login.
        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" })
        }

        const token = user.generateJwtToken()
        res.cookie("token", token)

        res.status(200).json({ token, user })

    } catch (error) {
        console.error("Error in loginUser:", error)
        res.status(500).json({ message: "Internal Server error", error: error.message })
    }

}

export const googleLogin = async (req, res) => {
    try {
        const { token } = req.body;

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { email, name, picture = "", sub: googleId } = payload;

        // check if user already exists
        let user = await accountUsers.findOne({ email });

        if (user) {
            // Update the existing manual user with Google data (if missing)
            if (!user.googleId) user.googleId = googleId;
            if (!user.avatar?.url && picture) user.avatar = { url: picture };
            if (user.provider !== "google") user.provider = "google";

            await user.save(); // save updated data
        }

        if (!user) {
            user = await accountUsers.create({
                name,
                email,
                password: null, // or random hash if you want
                googleId,
                avatar: { url: picture },
                provider: "google"
            });
        }

        // generate your own JWT
        const jwtToken = user.generateJwtToken();
        res.status(200).json({
            success: true,
            token: jwtToken,
            user: {
                name, email,
                picture: picture || null,
            },
        });
    } catch (error) {
        console.error("Google login error:", error);
        res.status(401).json({ success: false, message: "Invalid Google token" });
    }
};

export const githubLogin = async (req, res) => {
    try {
        const { code } = req.body;

        // Exchange code for access token
        const tokenResponse = await axios.post(
            "https://github.com/login/oauth/access_token",
            {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            {
                headers: { Accept: "application/json" },
            }
        );

        const accessToken = tokenResponse.data.access_token;
        if (!accessToken)
            return res.status(401).json({ success: false, message: "No access token" });

        // Get GitHub user info
        const userResponse = await axios.get("https://api.github.com/user", {
            headers: { Authorization: `token ${accessToken}` },
        });

        const { login, name, avatar_url, email, id: githubId } = userResponse.data;

        // GitHub sometimes doesn’t return email, so we fetch it separately if needed
        let userEmail = email;
        if (!userEmail) {
            const emailResp = await axios.get("https://api.github.com/user/emails", {
                headers: { Authorization: `token ${accessToken}` },
            });
            const primaryEmail = emailResp.data.find(e => e.primary && e.verified);
            userEmail = primaryEmail?.email;
        }

        // Find or create user
        let user = await accountUsers.findOne({ email: userEmail });
        if (user) {
            // Update the existing manual user with Github data (if missing)
            if (!user.githubId) user.githubId = githubId;
            await user.save(); // save updated data
        }
        if (!user) {
            user = await accountUsers.create({
                name: name || login,
                email: userEmail.toLowerCase(),
                password: null,
                avatar: { url: avatar_url },
                githubId,
                provider: "github",
            });
        }

        // Generate JWT
        const jwtToken = user.generateJwtToken();

        res.status(200).json({
            success: true,
            token: jwtToken,
            user: {
                name: user.name,
                email: user.email,
                avatar: user.avatar?.url || null,
            },
        });
    } catch (error) {
        console.error("GitHub login error:", error.message);
        console.error("GitHub login error full:", error.response?.data || error.message);
        res.status(401).json({ success: false, message: "GitHub auth failed" });
    }
}


export const UpdateUserProfile = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const userId = req.user.id; // from JWT middleware
        const { name, email, password } = req.body;

        const user = await accountUsers.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // OPTIONAL: Prevent changing email for now (recommended for security)
        if (email && email !== user.email) {
            return res.status(403).json({ message: "Email cannot be changed." });
        }

        // Update name if provided
        if (name && name !== user.name) {
            user.name = name;
        }

        // Update password if provided
        if (password && password.trim().length >= 4) {
            const hashed = await accountUsers.hashPassword(password);
            user.password = hashed;
        }

        await user.save();

        res.status(200).json({
            message: "Profile updated successfully.",
            user: {
                name: user.name,
                email: user.email,
                // never send password back
            },
        });
    } catch (error) {
        console.error("Error in UpdateUserProfile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user)
}

export const userLogout = async (req, res, next) => {
    res.clearCookie("token")
    res.setHeader("Authorization", "");

    res.status(200).json({ message: "User Logged out Successfully." })

}