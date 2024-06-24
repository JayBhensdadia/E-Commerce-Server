
import { Request, Response } from "express";
import { UserModel } from "../../db/models/user";
import { getDetailsService } from "../../services/user/get-details";



//get the users details
export const getMyDetails = async (req: Request, res: Response) => {
    try {

        const email = res.locals.email;
        const user = await getDetailsService(email);

        res.json(user);

    } catch (error) {
        console.log(error);
    }
};