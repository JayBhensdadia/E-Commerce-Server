import { NextFunction, Request, Response } from "express";
import { CartModel } from "../../db/models/cart";
import { UserModel } from "../../db/models/user";
import { UserDoesNotExist } from "../../errors";



//get all cart items of user
export const getCartItems = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const email = res.locals.email;
        const user = await UserModel.findOne({
            email
        });

        if (!user) {
            console.log('error in get cart items controller user not found');
            throw new UserDoesNotExist('user not found!');
        }
        const cartItems = await CartModel.find({
            userId: user._id
        });

        res.json({ cartItems });

    } catch (error) {
        console.log('error in get cart items controller');
        next(error);

    }
};