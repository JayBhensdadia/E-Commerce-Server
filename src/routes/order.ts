import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { createNewOrder } from "../controllers/order-controllers/create-order";
import { getMyOrders } from "../controllers/order-controllers/get-my-orders";



const router = Router();

//place order
router.post('/place-order', authMiddleware, createNewOrder);


//get user orders
router.get("/order", authMiddleware, getMyOrders);





export {
    router as orderRouter
};