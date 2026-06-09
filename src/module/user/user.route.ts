import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

router.post('/user', userController.signUpUser);


export const userRoute = router;