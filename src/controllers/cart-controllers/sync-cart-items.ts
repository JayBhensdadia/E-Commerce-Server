import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../db/models/user";
import { CartModel } from "../../db/models/cart";



//sync the local cart of user (one created before user login)
//with the database
export const syncCartItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const email = res.locals.email;
        const { localItems }: { localItems: [{ userId: string, productId: string, quantity: number; }]; } = req.body;

        console.log('local items: ', localItems);


        // Find the user
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find the database cart items
        const dbItems = await CartModel.find({ userId: user._id });

        console.log('db items: ', dbItems);


        // Map local items to a format that can be used for updating or creating items
        const updates = localItems.map(async (item) => {
            const dbItem = dbItems.find((i) => i.productId.toString() === item.productId);

            console.log('dbItem', dbItem);

            if (dbItem) {
                // If item exists in the database, update the quantity
                dbItem.quantity = item.quantity;
                return dbItem.save();
            } else {
                // If item does not exist, create a new cart item
                const newCartItem = new CartModel({
                    userId: user._id,
                    productId: item.productId,
                    quantity: item.quantity
                });
                console.log('creating new cart item');

                return newCartItem.save();
            }
        });

        // Wait for all updates/creations to complete
        await Promise.all(updates);

        res.json({ msg: 'cart synced!!' });
    } catch (error) {
        console.log('error in sync cart items controller:', error);
        next(error);
    }
};
