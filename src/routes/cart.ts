import { Router } from "express";
import { createCartItem } from "../controllers/cart-controllers/create-cart-item";
import { authMiddleware } from "../middlewares/auth";
import { getCartItems } from "../controllers/cart-controllers/get-cart-items";
import { updateCartItem } from "../controllers/cart-controllers/update-cart-item";

const router = Router();



//temporary route to add products
router.post("/cart", authMiddleware, createCartItem);
router.get("/cart", authMiddleware, getCartItems);
router.put("/cart", authMiddleware, updateCartItem);










export {
    router as cartRouter
};