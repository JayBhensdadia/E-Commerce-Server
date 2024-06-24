
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../errors/CustomError";


//global error handler
export const errorHandler = (err: Error | CustomError, req: Request, res: Response, next: NextFunction) => {

    // Custom error handling for known types
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }



    // Default handler for unexpected errors
    console.error("Unhandled error:", err);  // Log for debugging
    res.status(500).json({ error: "Internal Server Error" });

};