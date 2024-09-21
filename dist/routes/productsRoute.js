"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controllers/productsController"));
const router = (0, express_1.Router)();
router.get('/allPro', productsController_1.default.getAllProducts);
router.post('/addPro', productsController_1.default.addProduct);
router.get('/allPro/:id', productsController_1.default.getOnePro);
router.delete('/onePro/:id', productsController_1.default.deleteOnePro);
router.put('/updateOnePro/:id', productsController_1.default.updateOnePro);
exports.default = router;
