import { Request, Response } from "express"
import products from "../model/productModel"

const getAllProducts = async (req:Request, res:Response)=>{
    try {
        const pro = await products.find();
        res.status(200).json({
            success: true,
            data: pro
        })
    } catch (error: unknown){
        const err = error as Error
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
            error: err.message,
        })
    }
}

export default {getAllProducts}