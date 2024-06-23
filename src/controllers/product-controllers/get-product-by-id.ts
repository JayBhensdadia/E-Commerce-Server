import { NextFunction, Request, Response } from "express";
import { ProductModel } from "../../db/models/product";

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { id } = req.params;


        const product = await ProductModel.findOne({
            _id: id
        });


        res.status(200).json({ product });

    } catch (error) {
        console.log("error in get product by id controller: ", error);
        next(error);

    }
};