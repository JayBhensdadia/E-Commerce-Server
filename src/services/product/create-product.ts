import { z } from 'zod';
import { CreateProductSchema } from '../../controllers/product-controllers/create-product';
import { ProductModel } from '../../db/models/product';


type CreateProductData = z.infer<typeof CreateProductSchema>;

//creates a new product
export const createProductService = async (data: CreateProductData) => {


    const product = new ProductModel({
        name: data.name,
        price: data.price,
        description: data.description,
        image: data.image
    });

    await product.save();
    return;

};