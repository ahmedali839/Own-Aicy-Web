import express from "express"
const router = express.Router()
import { registerUser, loginUser, getUserProfile, userLogout, UpdateUserProfile } from "../controllers/user.controller.js"
import { AuthUser } from "../middlewares/user.middleware.js"
import { body } from "express-validator"

router.post("/register", [
    body("name").isLength({ min: 3 }).withMessage("Name must more than 3 characters"),
    body("email").isEmail().withMessage("Invalid Email").isLength({ min: 4 }).withMessage("Email must more than 4 characters"),
    body("password").isLength({ min: 4 }).withMessage("Password must more than 4 characters"),
],
    registerUser
)

router.post("/login", [
    body("email").isEmail().withMessage("Invalid Email").isLength({ min: 4 }).withMessage("Email must more than 4 characters"),
    body("password").isLength({ min: 4 }).withMessage("Password must be 4 characters"),
],
    loginUser
)

router.get("/profile", AuthUser, getUserProfile)
router.put("/update-profile", AuthUser, UpdateUserProfile)
router.get("/logout", AuthUser, userLogout)


export default router