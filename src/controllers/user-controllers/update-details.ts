
import { Request, Response } from "express";
import { UserModel } from "../../db/models/user";
import { updateDetailsService } from "../../services/user/update-details";



//update the user details
export const updateDetails = async (req: Request, res: Response) => {
    try {


        const email = res.locals.email;

        const data = req.body;


        //call the update service 
        await updateDetailsService(email, data);




        res.json({ msg: "details updated successfully!!" });

    } catch (error) {
        console.log(error);
    }
};