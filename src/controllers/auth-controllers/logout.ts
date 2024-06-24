import { NextFunction, Request, Response } from "express";


export const logout = async (req: Request, res: Response, next: NextFunction) => {
    try {

        //clears the cookie from users browser
        res.clearCookie('token');
        res.end();

    } catch (error) {
        console.log('error in logout controller');
        throw error;

    }
};