import { NextFunction, Request, Response } from "express";
import { z } from 'zod';
import { InvalidInputs } from "../../errors";
import { ProductModel } from "../../db/models/product";
import { createProductService } from "../../services/product/create-product";


export const CreateProductSchema = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
    image: z.string()
});



export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {


        //validate the inputs
        const validatedData = CreateProductSchema.safeParse(req.body);

        //reject if validation fails
        if (!validatedData.success) {
            console.log('invalid inputs found in create-product controller');
            throw new InvalidInputs("invalid inputs!");
        }


        const data = validatedData.data;

        await createProductService(data);

        res.status(200).json({ msg: 'Product created successfully' });



    } catch (error) {
        console.log('Error in create product controller', error);
        next(error);
    }
};