import { CustomError } from "./CustomError";


export class IncorrectPassword extends CustomError {

    constructor(name: string = 'IncorrectPassword', message: string = 'The password was incorrect!', statusCode: number = 401) {
        super(name, message, statusCode);
    }
}

