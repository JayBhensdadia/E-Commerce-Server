import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../db/models/user";
import { OrderDetailsModel } from "../../db/models/order";
import { UserDoesNotExist } from "../../errors";

export const getMyOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {


        const email = res.locals.email;

        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new UserDoesNotExist('user not found!');
        }

        const orders = await OrderDetailsModel.find({
            userId: user._id
        });

        res.json({ orders });

    } catch (error) {
        console.log('error in get my order controller');
        next(error);
    }
};