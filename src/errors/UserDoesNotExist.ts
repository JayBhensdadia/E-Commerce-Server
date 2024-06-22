import { CustomError } from "./CustomError";

export class UserDoesNotExist extends CustomError {
    static statusCode: number = 404;

    constructor(name: string = 'UserDoesNotExist', message: string = 'user does not exist with that email, please register yourself', statusCode: number = 404) {
        super(name, message, statusCode);

    }
}
