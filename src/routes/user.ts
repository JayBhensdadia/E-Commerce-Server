import { Router, Request, Response } from "express";
import { authMiddleware } from "../middlewares/auth";
import { getMyDetails } from "../controllers/user-controllers/get-details";
import { updateDetails } from "../controllers/user-controllers/update-details";



//user router
const router = Router();



//user routes
router.get("/user/me", authMiddleware, getMyDetails);

router.put("/user/update", authMiddleware, updateDetails);







export {
    router as userRouter
};