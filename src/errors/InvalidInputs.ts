import { CustomError } from "./CustomError";

export class InvalidInputs extends CustomError {


    constructor(name: string = 'InvalidInputs', message: string = 'Invalid inputs were provided!', statusCode: number = 411) {
        super(name, message, statusCode);
    }
}

