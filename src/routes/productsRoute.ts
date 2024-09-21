
import { Router } from "express";
import productsController from "../controllers/productsController";

const router = Router();

router.get('/allPro', productsController.getAllProducts);
router.post('/addPro', productsController.addProduct);
router.get('/allPro/:id', productsController.getOnePro);
router.delete('/onePro/:id', productsController.deleteOnePro);
router.put('/updateOnePro/:id', productsController.updateOnePro);

export default router;