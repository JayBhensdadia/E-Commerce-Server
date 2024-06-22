import { NextFunction, Request, Response } from "express";

import { z } from 'zod';
import { InvalidInputs } from "../../errors";
import { CartModel } from "../../db/models/cart";


export const CreateCartInputSchema = z.object({
    userId: z.string(),
    productId: z.string(),
    quantity: z.number()
});


export const createCartItem = async (req: Request, res: Response, next: NextFunction) => {
    try {


        //validate the input

        const validatedData = CreateCartInputSchema.safeParse(req.body);

        if (!validatedData.success) {
            console.log("invalid inputs found in create cart item controller");

            throw new InvalidInputs('invalid inputs for cart item');
        }



        const { userId, productId, quantity } = validatedData.data;


        //check if cart item is already there with given product id
        const oldCartItem = await CartModel.findOne({
            productId,
            userId
        });




        if (!oldCartItem) {

            const cartItem = new CartModel({
                userId,
                productId,
                quantity
            });


            await cartItem.save();

        } else {


            await CartModel.updateOne({
                _id: oldCartItem._id
            }, {
                quantity: oldCartItem.quantity + quantity
            });


        }



        res.json({ msg: 'cart item created/updated successfully' });


    } catch (error) {
        console.log('error in create cart item');

        next(error);
    }
};