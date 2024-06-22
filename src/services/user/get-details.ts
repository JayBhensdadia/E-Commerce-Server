import { UserModel } from "../../db/models/user";

export const getDetailsService = async (email: string) => {
    return await UserModel.findOne({ email });
};