import { NextFunction, Request, Response } from "express";
import { z } from 'zod';
import { InvalidInputs } from "../../errors";
import { signupService } from "../../services/auth/signup";


export const SignupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    userName: z.string().optional(),
    profilePicture: z.string().url().optional(),
    phoneNumber: z.string().optional(),
});

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {


        //validate the inputs
        const validatedData = SignupSchema.safeParse(req.body);

        //reject if validation fails
        if (!validatedData.success) {
            console.log("input validation failed in signup controller");
            throw new InvalidInputs("Invalid Inputs!");
        }


        const data = validatedData.data;

        //signup with validated data
        await signupService(data);

        //on successfull signup
        res.status(200).json({ msg: "user created successfully" });

    } catch (error) {
        next(error);
    }
};