import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
import connectToDb from "./config/db_Connection.js"
import userRoutes from "./routes/user.routes.js"


// connect to Mongo Database
connectToDb()

app.use(cors({
    origin: `${process.env.FRONTEND_URL}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));


// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello World in App")
})

app.use("/users", userRoutes)

export default app