"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productsModel = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        minlength: [2, "Minimum length of name should be 2"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [1, "minimum price of the product should be 1"]
    },
    rating: {
        type: Number,
        required: [true, "Product ratting is required"],
        min: [1, "minimum Rating of the product should be 1"],
        max: [5, "minimum Rating of the product should be 5"]
    }
});
//product model 
const products = mongoose_1.default.model('products', productsModel);
exports.default = products;
