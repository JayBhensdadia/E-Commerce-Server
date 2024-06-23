
import { Router } from "express";
import { signup, signin } from "../controllers/auth-controllers";
import { logout } from "../controllers/auth-controllers/logout";


const router = Router();


router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);

export {
    router as coreAuthRouter
};