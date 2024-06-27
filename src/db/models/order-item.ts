import mongoose from "mongoose";
import { Schema } from "mongoose";


const orderItemSchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'OrderDetails'
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});


export const OrderItemModel = mongoose.model('OrderItem', orderItemSchema);