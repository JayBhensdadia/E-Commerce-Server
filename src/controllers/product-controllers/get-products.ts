import { NextFunction, Request, Response } from "express";
import { ProductModel } from "../../db/models/product";

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const page = parseInt(req.query["page"] as string);
        const pageSize = parseInt(req.query["pageSize"] as string);


        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const products = await ProductModel.find({});

        const resData = products.slice(startIndex, endIndex);

        const totalPages = Math.ceil(products.length / pageSize);

        res.status(200).json({ products: resData, totalPages });

    } catch (error) {
        console.log("error in get products controller: ", error);
        next(error);

    }
};