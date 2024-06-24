import { NextFunction, Request, Response } from "express";
import { ProductModel } from "../../db/models/product";



//get all products (paginated)
//query => http://localhost:8080/api/product?page=1&pageSize=10 
export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {

        //page
        const page = parseInt(req.query["page"] as string);

        //pageSize
        const pageSize = parseInt(req.query["pageSize"] as string);


        //calculate start index and end index
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;


        //get all products
        const products = await ProductModel.find({});


        //filter products based on startIndex and endIndex
        const resData = products.slice(startIndex, endIndex);

        //return filtered products
        const totalPages = Math.ceil(products.length / pageSize);

        res.status(200).json({ products: resData, totalPages });

    } catch (error) {
        console.log("error in get products controller: ", error);
        next(error);

    }
};