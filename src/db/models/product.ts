import mongoose from 'mongoose';
import { hashIt } from '../../utils/hash';

const Schema = mongoose.Schema;

// Product Schema
const productSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});


//product model
export const ProductModel = mongoose.model('Product', productSchema);

