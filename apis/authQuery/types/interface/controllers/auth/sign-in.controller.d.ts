import { Request, Response } from "express";
export declare class SignInController {
    /**
     * @swagger
     * /api/auth/login:
     *   post:
     *     summary: Login a user
     *     tags: [Auth]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - email
     *               - password
     *             properties:
     *               email:
     *                 type: string
     *                 description: Email de l'utilisateur
     *               password:
     *                 type: string
     *                 description: Mot de passe de l'utilisateur
     *             example:
     *               email: johndoe@example.com
     *               password: myPassword123
     *     responses:
     *       200:
     *         description: User logged in successfully and Session created
     *       400:
     *         description: Invalid credentials
     *       404:
     *         description: User not found
     */
    login(req: Request, res: Response): Promise<Response>;
}
