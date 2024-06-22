import { NextFunction, Request, Response } from "express";
import { UserDoesNotExist, IncorrectPassword, InvalidInputs } from "../../errors";
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { hashIt, verifyPassword } from "../../utils/hash";
import { UserModel } from "../../db/models/user";
import { signinService } from "../../services/auth";

export const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const signin = async (req: Request, res: Response, next: NextFunction) => {
    try {




        //validate the input
        const validatedData = SigninSchema.safeParse(req.body);


        //reject request if validation fails
        if (!validatedData.success) {
            console.log("input validation failed in signin controller");
            throw new InvalidInputs("Invalid Inputs!");
        }


        const data = validatedData.data;


        //singin with validated data
        const token = await signinService(data);



        //on successfull singin, return token

        res.cookie("token", token, {
            expires: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)),
        });

        return res.json({
            msg: "logged in, successfully!",
        });


    } catch (error) {
        next(error);
    }
}

