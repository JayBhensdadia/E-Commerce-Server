import bcrypt from 'bcryptjs';

const saltRounds = 10;


export const hashIt = async (password: string) => {
    return await bcrypt.hash(password, saltRounds);
};

export const verifyPassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
};