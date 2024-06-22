import { CustomError } from "./CustomError";

export class UserAlreadyExists extends CustomError {
    static statusCode: number = 409;

    constructor(name: string = 'UserAlreadyExists', message: string = 'user with already exists', statusCode: number = 409) {
        super(name, message, statusCode);
    }
}


