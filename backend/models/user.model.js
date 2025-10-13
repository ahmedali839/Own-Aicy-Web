import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "name should at least 3 characters long"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, "email should at least 3 characters long"]
    },
    password: {
        type: String,
        required: true,
        select: false,
        minLength: [4, "password should at least 4 characters long"],
    }
})

UserSchema.methods.generateJwtToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.jwt_secret_key, { expiresIn: "365h" })
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