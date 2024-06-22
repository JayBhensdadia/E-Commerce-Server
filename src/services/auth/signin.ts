import { SigninSchema } from "../../controllers/auth-controllers/signin";
import { string, z } from 'zod';
import { UserModel } from "../../db/models/user";
import { IncorrectPassword, UserAlreadyExists, UserDoesNotExist } from "../../errors";
import { verifyPassword } from "../../utils/hash";
import jwt from 'jsonwebtoken';


type SinginData = z.infer<typeof SigninSchema>;


export const signinService = async (data: SinginData): Promise<string> => {


    //find user in db
    const user = await UserModel.findOne({
        email: data.email
    });

    if (!user) {
        console.log(`user does not exists with email ${data.email}`);
        throw new UserDoesNotExist("No user found, please register!!");
    }




    //verify password
    const paswordVerification = await verifyPassword(data.password, user.password);

    if (!paswordVerification) {
        console.log(`incorrect password was sent in signin controller`);
        throw new IncorrectPassword("password is incorrect!!");
    }


    //if varification succseeds create and return a token
    const JWT_SECRET = process.env.JWT_SECRET ?? "Jay@1234";
    console.log(JWT_SECRET);

    const token = jwt.sign({
        email: data.email
    }, JWT_SECRET);

    return token;

};