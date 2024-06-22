
import { Request, Response } from "express";
import { UserModel } from "../../db/models/user";
import { updateDetailsService } from "../../services/user/update-details";


export const updateDetails = async (req: Request, res: Response) => {
    try {


        const email = res.locals.email;

        const data = req.body;
        await updateDetailsService(email, data);
        // console.log(firstName, lastName, userName, phoneNumber);


        // const user = await UserModel.updateOne({
        //     email
        // }, {
        //     firstName: firstName,
        //     lastName: lastName,
        //     userName: userName,
        //     phoneNumber: phoneNumber,
        //     profilePicture: profilePicture

        // });



        res.json({ msg: "details updated successfully!!" });

    } catch (error) {
        console.log(error);
    }
};