import mongoose from 'mongoose';


//utility function to connect to database
export const connectToDatabase = async () => {
    const db_url = process.env.DATABASE_URL ?? "mogodb://localhost:27017/";
    console.log(`connecting to database at ${db_url}`);
    return await mongoose.connect(db_url);
};