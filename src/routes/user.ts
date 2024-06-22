import { Router, Request, Response } from "express";
import { authMiddleware } from "../middlewares/auth";
import { getMyDetails } from "../controllers/user-controllers/get-details";
import { updateDetails } from "../controllers/user-controllers/update-details";




const router = Router();



// get my details
router.get("/user/me", authMiddleware, getMyDetails);

//update my details
router.put("/user/update", authMiddleware, updateDetails);







export {
    router as userRouter
};