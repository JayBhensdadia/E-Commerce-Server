import { CustomError } from "./CustomError";

export class UnAuthenticatedRequest extends CustomError {
    static statusCode: number = 400;

    constructor(name: string = 'UnAuthenticatedRequest', message: string = 'Please login to authenticate yourself!', statusCode: number = 400) {
        super(name, message, statusCode);
    }
}

