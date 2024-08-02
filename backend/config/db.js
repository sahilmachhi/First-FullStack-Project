import mongoose from "mongoose";
import { configDotenv } from "dotenv"

configDotenv()

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL)
        return console.log(`express connected to ${connection.connection.host}`)
    } catch (error) {
        console.log(`express failed to connect ${error}`)
    }
}