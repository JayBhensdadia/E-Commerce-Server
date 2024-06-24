import bcrypt from 'bcryptjs';

const saltRounds = 10;

//function to hash the password
export const hashIt = async (password: string) => {
    return await bcrypt.hash(password, saltRounds);
};


//function to verify the password against the hash stored in database
export const verifyPassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
};