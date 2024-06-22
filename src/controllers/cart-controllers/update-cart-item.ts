import { NextFunction, Request, Response } from "express";

import { z } from 'zod';
import { InvalidInputs } from "../../errors";
import { CartModel } from "../../db/models/cart";


export const UpdateCartInputSchema = z.object({
    cartId: z.string(),
    quantity: z.number()
});

export const updateCartItem = async (req: Request, res: Response, next: NextFunction) => {

    try {


        //validate input
        const validatedData = UpdateCartInputSchema.safeParse(req.body);

        if (!validatedData.success) {
            console.log('invalid inputs found in update cart item controller');
            throw new InvalidInputs('invalid inputs were found');

        }


        const { cartId, quantity } = validatedData.data;


        await CartModel.updateOne({
            _id: cartId
        }, {
            quantity
        });

        res.json({ msg: 'cart item updated successfully' });

    } catch (error) {
        console.log('error in udate cart items controller');
        next(error);

    }
};