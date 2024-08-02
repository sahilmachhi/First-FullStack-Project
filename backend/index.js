import express from "express"
import { connectDB } from "./config/db.js"
import { Router } from './Routes/Product.routes.js'
import cors from "cors"

const app = express()
app.use(express.json()) // for json use
app.use(cors())

app.use("/api", Router)

app.listen(5000, () => {
    console.log("port is running on 5000")
    connectDB()
})