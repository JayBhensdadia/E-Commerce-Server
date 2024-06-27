import mongoose from "mongoose";
import { Schema } from "mongoose";



const OrderDetailsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    total: {
        type: Number,
        required: true
    }
}, { timestamps: true });



export const OrderDetailsModel = mongoose.model('OrderDetails', OrderDetailsSchema);