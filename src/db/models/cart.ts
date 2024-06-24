import mongoose from "mongoose";
import { Schema } from "mongoose";

//cart schema
const cartSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        requird: true,
        default: 1
    }
});


export const CartModel = mongoose.model('Cart', cartSchema);