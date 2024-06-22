import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { createProduct } from "../controllers/product-controllers/create-product";
import { getProducts } from "../controllers/product-controllers/get-products";

const router = Router();



//temporary route to add products
router.post("/product", createProduct);


//get products
router.get("/product", getProducts);











export {
    router as productRouter
};