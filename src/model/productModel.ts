import mongoose, { Document, Schema } from "mongoose";

interface IProduct extends Document {
    name: string;
    price: number;
    rating: number;
  }

const productsModel: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        minlength: [2,"Minimum length of name should be 2"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [1, "minimum price of the product should be 1"]
    },
    rating: {
        type: Number,
        required: [true, "Product ratting is required"],
        min: [1, "minimum price of the product should be 1"],
        max: [5, "minimum price of the product should be 5"]
    }
})
//product model 
const products = mongoose.model<IProduct>('products', productsModel);

export default products;