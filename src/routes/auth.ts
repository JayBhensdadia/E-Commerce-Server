
import { Router } from "express";
import { signup, signin } from "../controllers/auth-controllers";
import { logout } from "../controllers/auth-controllers/logout";


//auth router
const router = Router();

//auth routes
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);

export {
    router as coreAuthRouter
};