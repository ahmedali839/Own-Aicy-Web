import jwt from "jsonwebtoken"
import accountUsers from "../models/user.model.js"

export const AuthUser = async (req, res, next) => {

    const token = req.cookies?.token || req.headers?.authorization?.split(" ")[1]

    console.log("Authorization Header: ", req.headers.authorization)
    console.log("Cookies: ", req.cookies)

    if (!token) {
        return res.status(401).json({ message: "UnAuthorized Access in token." })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await accountUsers.findById(decode._id)
        req.user = user
        return next()
    } catch (error) {
        return res.status(401).json({ message: "UnAuthorized Access. in try catch" })
    }
}

