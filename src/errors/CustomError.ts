
//custom error class
export class CustomError extends Error {
    public readonly name: string;
    public readonly statusCode: number;

    constructor(name: string, message: string, statusCode: number) {
        super(message);
        this.name = name;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}