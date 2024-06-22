import mongoose from 'mongoose';
import { hashIt } from '../../utils/hash';

const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    userName: { type: String, default: null },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: null },
    phoneNumber: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Middleware to update the `updatedAt` field
userSchema.pre('save', async function (next) {
    this.updatedAt = new Date();
    this.password = await hashIt(this.password);
    next();
});


export const UserModel = mongoose.model('User', userSchema);