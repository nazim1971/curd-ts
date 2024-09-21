
import { Router } from "express";
import productsController from "../controllers/productsController";

const router = Router();

router.get('/allPro', productsController.getAllProducts)

export default router;