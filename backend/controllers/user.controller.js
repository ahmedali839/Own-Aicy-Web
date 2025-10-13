import accountUsers from "../models/user.model.js"
import { validationResult } from "express-validator"
import { createUser } from "../services/user.service.js"

export const registerUser = async (req, res, next) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body
    console.log(req.body)

    const isUserAlreadyExists = await accountUsers.findOne({ email })
    if (isUserAlreadyExists) {
        return res.status(401).json("Email already exists")
    }

    const hashed = await accountUsers.hashPassword(password)

    // send data to service file to store into model of MongoDB
    const user = await createUser({
        name,
        email,
        hashed,
    })

    const token = user.generateJwtToken()

    res.status(200).json({ token, user })
}

export const loginUser = async (req, res, next) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body


    const user = await accountUsers.findOne({ email }).select("+password")
    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" })
    }

    const token = user.generateJwtToken()
    res.cookie("token", token)

    res.status(200).json({ token, user })

}

export const UpdateUserProfile = async (req, res, next) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const userId = req.user.id
    const { name, email } = req.body


    const user = await accountUsers.findById(userId)
    if (!user) {
        return res.status(400).json({ message: "User not found" })
    }

    if (name) user.name = name
    if (email) {
        const isEmailAlreadyExists = await accountUsers.findOne({ email })
        if (isEmailAlreadyExists) {
            return res.status(401).json({ message: "Email already registered, try another email " })
        }
        user.email = email
    }
    await user.save()

    res.status(200).json({ message: "User Profile Updated Successfully.", user })

}

export const getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user)
}

export const userLogout = async (req, res, next) => {
    res.clearCookie("token")

    // const token = req.cookie.token || req.headers.Authorization?.split(" ")[1]
    res.status(200).json({ message: "User Logged out Successfully." })

}