import { NextFunction, Request, Response } from "express";

import { z } from 'zod';
import { InvalidInputs } from "../../errors";
import { CartModel } from "../../db/models/cart";


export const UpdateCartInputSchema = z.object({
    userId: z.string(),
    productId: z.string(),
    quantity: z.number()
});


//update the cart item
//which => whose userId and productId are same as provided
export const updateCartItem = async (req: Request, res: Response, next: NextFunction) => {

    try {


        //validate input
        const validatedData = UpdateCartInputSchema.safeParse(req.body);

        if (!validatedData.success) {
            console.log('invalid inputs found in update cart item controller');
            throw new InvalidInputs('invalid inputs were found');

        }


        //if valid input
        const { userId, productId, quantity } = validatedData.data;


        //if quantity is zero delete the product
        if (quantity === 0) {

            await CartModel.deleteOne({
                userId,
                productId
            });

        } else {

            await CartModel.updateOne({
                userId,
                productId
            }, {
                quantity
            });

        }


        res.json({ msg: 'cart item updated successfully' });

    } catch (error) {
        console.log('error in udate cart items controller');
        next(error);

    }
};