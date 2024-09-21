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

const addProduct = async (req:Request, res:Response)=>{
    try {
        const newProduct = await products.create(req.body);
        res.status(201).json({
            success: true,
            data: newProduct
        })
    } catch (error: unknown) {
      const err = error as Error;
      res.status(500).json({
        success: false,
        error: err.message,
      })
    }
}

const getOnePro = async (req:Request, res:Response)=>{
    try {
        const { id } = req.params; 
        const pro = await products.findOne({_id:id});

        if(!pro){
            return res.status(404).json({
                success: false,
                message: "Product not found",
              });
        }
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

const deleteOnePro = async (req:Request, res:Response)=>{
    try {
        const { id } = req.params; 
        const pro = await products.deleteOne({_id:id});

        if(!pro){
            return res.status(404).json({
                success: false,
                message: "Product not found",
              });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
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




export default {getAllProducts, addProduct, getOnePro, deleteOnePro}