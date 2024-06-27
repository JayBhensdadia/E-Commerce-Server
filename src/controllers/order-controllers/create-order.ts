import { NextFunction, Request, Response } from "express";
import { OrderItemModel } from "../../db/models/order-item";
import { OrderDetailsModel } from "../../db/models/order";
import { CartModel } from "../../db/models/cart";

export const createNewOrder = async (req: Request, res: Response, next: NextFunction) => {

    try {


        const { userId, total, orderItems }: {
            userId: string,
            total: Number,
            orderItems: Array<{
                userId: string,
                productId: string,
                quantity: number;
            }>;
        } = req.body;


        const order = new OrderDetailsModel({
            userId,
            total
        });

        await order.save();

        const orderPromises = orderItems.map(async (item) => {
            const newOrderItem = new OrderItemModel({
                orderId: order._id,
                productId: item.productId,
                quantity: item.quantity
            });
            return newOrderItem.save();
        });


        await Promise.all(orderPromises);

        res.json({
            msg: "order placed!!"
        });

    } catch (error) {
        console.log('error in create new order controller');
        next(error);

    }

};