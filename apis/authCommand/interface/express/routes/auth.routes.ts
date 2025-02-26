import express from "express";
import { SignUpController } from "../controllers/auth/sign-up.controller";

const router = express.Router();

const signUpController = new SignUpController();
router.post("/register", async (req, res, next) => {
    // res.json({ message: "Hello, TypeScript Node Express! Auth Command" }).status(200).end();
    await signUpController.register(req, res);

    res.json({ message: "Hello, TypeScript Node Express! Auth Command" }).status(200).end();
});
// router.post("/change-password", AuthController.changePassword);
// router.put("/update", AuthController.update);
// router.put("/update-role", AuthController.updateRole);
// router.put("/update-password", AuthController.updatePassword);
// router.delete("/delete", AuthController.delete);

export default router;
