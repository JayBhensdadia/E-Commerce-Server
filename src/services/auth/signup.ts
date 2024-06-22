import { SignupSchema } from "../../controllers/auth-controllers/signup";
import { z } from 'zod';
import { UserModel } from "../../db/models/user";
import { UserAlreadyExists } from "../../errors";

type SignupData = z.infer<typeof SignupSchema>;


export const signupService = async (data: SignupData) => {

    //check if user already exists
    const oldUser = await UserModel.findOne({
        email: data.email
    });


    //if yes then reject the signup request
    if (oldUser) {
        console.log(`user already exists with email ${data.email}`);
        throw new UserAlreadyExists("User already exists");
    }


    //create a user otherwise
    const user = new UserModel(data);

    await user.save();


    return;
};