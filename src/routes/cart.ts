import { Router } from "express";
import { createCartItem } from "../controllers/cart-controllers/create-cart-item";
import { authMiddleware } from "../middlewares/auth";
import { getCartItems } from "../controllers/cart-controllers/get-cart-items";
import { updateCartItem } from "../controllers/cart-controllers/update-cart-item";
import { syncCartItems } from "../controllers/cart-controllers/sync-cart-items";
import { deleteCartItem } from "../controllers/cart-controllers/delete-cart-item";
import { clearMyCart } from "../controllers/cart-controllers/clear-cart";


//cart router
const router = Router();



//cart routes
router.post("/cart", authMiddleware, createCartItem);
router.get("/cart", authMiddleware, getCartItems);
router.put("/cart", authMiddleware, updateCartItem);
router.post("/cart/sync", authMiddleware, syncCartItems);
router.delete("/cart", authMiddleware, deleteCartItem);
router.get("/cart/clear", authMiddleware, clearMyCart);










export {
    router as cartRouter
};