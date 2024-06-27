import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response, json, urlencoded } from 'express';
import { UserModel } from './db/models/user';
import { ProductModel } from './db/models/product';
import { CartModel } from './db/models/cart';
import { errorHandler } from './controllers/error-handler';
import { coreAuthRouter } from './routes/auth';
import { userRouter } from './routes/user';
import { productRouter } from './routes/product';
import { cartRouter } from './routes/cart';
import { orderRouter } from './routes/order';


//create express app
const app = express();


//configure cors policy
//dev congigurations ↓ (not suitable for production ⚠️ !!!!!)
app.use(cors({
    origin: true,
    credentials: true
}));



//middleware to extract json data in request bodies
app.use(json());

//middleware to extract encoded form data
app.use(urlencoded());

//middleware to parse cookies
app.use(cookieParser());



//handle requests using appropriate routers
app.use('/api', coreAuthRouter);
app.use('/api', userRouter);
app.use("/api", productRouter);
app.use("/api", cartRouter);
app.use("/api", orderRouter);



//global catch
//global error handler
app.use(errorHandler);

//export express app configurations
export {
    app
};
