import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { createProduct } from "../controllers/product-controllers/create-product";
import { getProducts } from "../controllers/product-controllers/get-products";
import { getProductById } from "../controllers/product-controllers/get-product-by-id";

const router = Router();



//temporary route to add products
router.post("/product", createProduct);


//get products
router.get("/product", getProducts);


//get particular product
router.get("/product/:id", getProductById);










export {
    router as productRouter
};