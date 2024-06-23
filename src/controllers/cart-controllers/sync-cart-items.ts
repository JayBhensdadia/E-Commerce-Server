import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../db/models/user";
import { CartModel } from "../../db/models/cart";


export const syncCartItems = async (req: Request, res: Response, next: NextFunction) => {
    try {


        const email = res.locals.email;
        const { localItems }: { localItems: [{ userId: string, productId: string, quantity: number; }]; } = req.body;


        //find user
        const user = await UserModel.findOne({ email });


        //find database cart items
        const dbItems = await CartModel.find({ userId: user?._id });

        //update the database cart item quantiry with localcart item quantity
        localItems.map(async (item) => {

            const dbItem = await dbItems.find((i) => i.productId.toString() === item.productId);
            if (dbItem) {

                await CartModel.updateOne({ _id: dbItem._id }, {
                    quantity: item.quantity
                });

            } else {
                const newCartItem = new CartModel({
                    userId: user?._id,
                    productId: item.productId,
                    quantity: item.quantity
                });

                await newCartItem.save();
            }


        });


        res.json({ msg: 'cart synced!!' });



    } catch (error) {
        console.log('error in sync cart items controller');
        next(error);

    }
};