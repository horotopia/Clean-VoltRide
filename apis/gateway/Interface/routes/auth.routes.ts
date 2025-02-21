import express from "express";
import { SignUpController } from "../controllers/auth/sign-up.controller";

const router = express.Router();

// router.post("/login", AuthController.login);
const signUpController = new SignUpController();
router.post("/register", signUpController.register.bind(signUpController));

export default router;
