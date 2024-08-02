import { Product } from "../models/Product.models.js"

export const GetProducts = async (req, res) => {
    try {
        const Products = await Product.find({})
        res.status(200).json({ success: true, products: Products })
    } catch (error) {
        console.error("error in product fetch: ", error)
        res.status(404).json({ success: false, message: "Product fetch failed" })
    }
}

export const CreateProduct = async (req, res) => {
    const product = req.body // frontend will send data in req.body
    if (!product.name || !product.image || !product.price) {
        return res.status(400).json({ success: false, message: "please provide all info of product" })
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(201).json({ success: true, message: "product saved on database successfully" })
    } catch (error) {
        console.error("error in creating product in database: ", error)
        res.status(500).json({ success: false, message: "product is not saved in database something went wrong" })
    }
}

export const UpdateProduct = async (req, res) => {
    const { id } = req.params
    const product = req.body
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, message: "product updated from database successfully", updatedProduct: updatedProduct })
    } catch (error) {
        console.error("error in updating product: ", error)
        res.status(404).json({ success: false, message: "product update failed from database something went wrong" })
    }
}

export const DeleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "product deleted from database successfully" })
    } catch (error) {
        console.error("error in deleting product: ", error)
        res.status(404).json({ success: false, message: "product is not deleted from database something went wrong" })
    }
}