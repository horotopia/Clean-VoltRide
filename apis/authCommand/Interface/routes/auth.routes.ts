import express from "express";
import { SignInController } from "../controllers/auth/sign-in.controller";

const router = express.Router();

// router.post("/login", AuthController.login);
const signInController = new SignInController();
router.post("/register", signInController.register.bind(signInController));

export default router;
