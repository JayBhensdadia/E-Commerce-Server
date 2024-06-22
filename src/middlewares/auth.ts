import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UnAuthenticatedRequest } from '../errors';

interface AuthTokenPayload extends JwtPayload {
    email: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    try {
        const token = req.cookies["token"];

        if (!token) {
            console.log("missing token in authMiddleware");
            throw new UnAuthenticatedRequest("you are not authenticated!!");
        }

        const JWT_SECRET = process.env.JWT_SECRET ?? "Jay@1234";

        const decoded = jwt.verify(token, JWT_SECRET) as AuthTokenPayload;
        res.locals.email = decoded.email;
        next();

    } catch (error) {
        console.log('error in auth middleware');

        next(error);

    }



};