import express from "express";
import { SignInController } from "../controllers/auth/sign-in.controller";

const router = express.Router();

const signInController = new SignInController();
router.post("/login", async (req, res, next) => {
  await signInController.login(req, res);
});

export default router;
