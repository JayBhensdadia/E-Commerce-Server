import { UserModel } from "../../db/models/user";

interface UpdateDetailsData {
    firstName?: string,
    lastName?: string,
    userName?: string,
    phoneNumber?: string,
    profilePicture?: string;
}


//updates the user details
export const updateDetailsService = async (email: string, data: UpdateDetailsData) => {

    await UserModel.updateOne({
        email
    }, {
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
        phoneNumber: data.phoneNumber,
        profilePicture: data.profilePicture
    });
    return;
};