import express from "express";
import { SignInController } from "../controllers/auth/sign-in.controller";

const router = express.Router();

const signInController = new SignInController();
router.post("/login", signInController.login.bind(signInController));

export default router;
