import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { createNewOrder } from "../controllers/order-controllers/create-order";
import { getMyOrders } from "../controllers/order-controllers/get-my-orders";
import { getOrderItemsByOrderId } from "../controllers/order-controllers/get-items-by-id";



const router = Router();

//place order
router.post('/place-order', authMiddleware, createNewOrder);


//get user orders
router.get("/order", authMiddleware, getMyOrders);


router.get("/order/:id", authMiddleware, getOrderItemsByOrderId);





export {
    router as orderRouter
};