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

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));




// app.get("/", async (req: Request, res: Response) => {
//     for (let i = 0; i < 20; i++) {
//         const product = new ProductModel({
//             name: `product ${i}`,
//             description: `description ${i}`,
//             price: (i + 1) * 1001,
//             image: `image ${i}`
//         });

//         await product.save();
//     }

//     res.json({ msg: '20 sample producst inserted!!!' });
// });


app.use(json());
app.use(urlencoded());
app.use(cookieParser());

app.use('/api', coreAuthRouter);
app.use('/api', userRouter);
app.use("/api", productRouter);
app.use("/api", cartRouter);

app.use(errorHandler);


export {
    app
};
