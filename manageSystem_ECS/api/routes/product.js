import express from "express";
import { 
    getProducts,
    deleteProduct,
    getProductByName,
    updateProduct,
    addProduct,
    getProductById
 } from "../controller/product.js";
const router = express.Router();

router.get("/",getProducts);
router.get("/getProductByName",getProductByName);
router.get("/:id",getProductById)
router.delete("/:id",deleteProduct);
router.put("/:id",updateProduct);
router.post("/",addProduct);

export default router