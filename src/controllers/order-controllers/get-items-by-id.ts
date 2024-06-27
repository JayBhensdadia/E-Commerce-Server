import { NextFunction, Request, Response } from "express";
import { OrderItemModel } from "../../db/models/order-item";

export const getOrderItemsByOrderId = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { id } = req.params;


        const orderItems = await OrderItemModel.find({
            orderId: id
        });


        res.json({ orderItems });

    } catch (error) {
        console.log('errror in get order items by order id controller');
        throw error;

    }
};