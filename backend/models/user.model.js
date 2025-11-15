import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        minlength: [4, "Password must be at least 4 characters"],
        select: false,
    },
    provider: {
        type: String,
        enum: ["local", "google", "github"], // ✅ added github
        default: "local",
    },
    githubId: {
        type: String,
        unique: true,
        sparse: true, // allows null
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true, // allows null but still unique when defined
    },
    avatar: {
        public_id: String,
        url: String,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    lastLogin: Date,
},
    { timestamps: true }
);

UserSchema.methods.generateJwtToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" })
    return token
}

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

UserSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

const accountUsers = mongoose.model("accountUsers", UserSchema)
export default accountUsers