import express from "express"
import { GetProducts, CreateProduct, UpdateProduct, DeleteProduct } from "../Controllers/Product.controller.js"

export const Router = express.Router()

Router.get("/product", GetProducts)
Router.post("/product", CreateProduct)
Router.put("/product/:id", UpdateProduct)
Router.delete("/product/:id", DeleteProduct)