import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { createProduct } from "../controllers/product-controllers/create-product";
import { getProducts } from "../controllers/product-controllers/get-products";
import { getProductById } from "../controllers/product-controllers/get-product-by-id";


//product router
const router = Router();



//product routes
router.post("/product", createProduct);

router.get("/product", getProducts);

router.get("/product/:id", getProductById);










export {
    router as productRouter
};