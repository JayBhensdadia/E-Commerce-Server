import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response, json, urlencoded } from 'express';
import { UserModel } from './db/models/user';
import { ProductModel } from './db/models/product';
import { CartModel } from './db/models/cart';
import { errorHandler } from './controllers/error-handler';
import { coreAuthRouter } from './routes/auth';
import { userRouter } from './routes/user';

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));







app.use(json());
app.use(urlencoded());
app.use(cookieParser());

app.use('/api', coreAuthRouter);
app.use('/api', userRouter);

app.use(errorHandler);


export {
    app
};
