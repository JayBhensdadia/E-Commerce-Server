import { ProductModel } from "../db/models/product";
import { UserModel } from "../db/models/user";
import { products } from "./constant";

export const seedTheDataBase = async () => {
    for (let i = 0; i < 20; i++) {
        const user = new UserModel({
            email: `user${i}@gmail.com`,
            password: `User@123`
        });

        await user.save();
    }

    for (const productData of products) {
        const product = new ProductModel(productData);
        await product.save();
    }
};

