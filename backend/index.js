import express from "express"
import { connectDB } from "./config/db.js"
import { Router } from './Routes/Product.routes.js'
import cors from "cors"

const app = express()
app.use(express.json()) // for json use
app.use(cors())

app.use("/api", Router)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`port is running on ${port}`)
    connectDB()
})
