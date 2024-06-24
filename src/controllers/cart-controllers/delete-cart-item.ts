import { NextFunction, Request, Response } from "express";
import { CartModel } from "../../db/models/cart";



//delete the cart item 
//which item => whose userId and productId are same as provided
export const deleteCartItem = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { userId, productId } = req.body;

        await CartModel.deleteOne({ productId, userId });
        res.json({ msg: 'cart item deleted successfully' });

    } catch (error) {
        console.log('error in delete cart item');
        next(error);

    }
};