import { UserModel } from "../../db/models/user";


//fetches user details from backend
export const getDetailsService = async (email: string) => {
    return await UserModel.findOne({ email });
};