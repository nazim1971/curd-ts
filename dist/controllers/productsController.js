"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../model/productModel"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pro = yield productModel_1.default.find();
        res.status(200).json({
            success: true,
            data: pro
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
            error: err.message,
        });
    }
});
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield productModel_1.default.create(req.body);
        res.status(201).json({
            success: true,
            data: newProduct
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
});
const getOnePro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pro = yield productModel_1.default.findOne({ _id: id });
        if (!pro) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).json({
            success: true,
            data: pro
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
            error: err.message,
        });
    }
});
const deleteOnePro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pro = yield productModel_1.default.deleteOne({ _id: id });
        if (!pro) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).json({
            success: true,
            data: pro
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
            error: err.message,
        });
    }
});
const updateOnePro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const update = req.body;
        const pro = yield productModel_1.default.updateOne({ _id: id }, update, {
            new: true,
            runValidators: true
        });
        if (!pro) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).json({
            success: true,
            data: pro
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            success: false,
            message: "Failed to fetch products",
            error: err.message,
        });
    }
});
exports.default = { getAllProducts, addProduct, getOnePro, deleteOnePro, updateOnePro };
