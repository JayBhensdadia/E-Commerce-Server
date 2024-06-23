import { Request, Response } from "express";
import { UserModel } from "../../db/models/user";
import { CartModel } from "../../db/models/cart";
import { UserDoesNotExist } from "../../errors";

export const clearMyCart = async (req: Request, res: Response) => {
    try {

        const email = res.locals.email;

        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new UserDoesNotExist('user not found');
        }
        await CartModel.deleteMany({ userId: user._id });
        res.json({ msg: 'cart cleared!' });

    } catch (error) {
        console.log('error in clear my cart controller');

    }
};