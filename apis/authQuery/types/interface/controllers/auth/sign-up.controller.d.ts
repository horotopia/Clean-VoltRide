import { Request, Response } from "express";
export declare class SignInController {
    /**
     * @swagger
     * /auth/register:
     *   post:
     *     summary: Register a new user
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
     *                 description: The user's email
     *               password:
     *                 type: string
     *                 description: The user's password
     *     responses:
     *       201:
     *         description: The created user
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       400:
     *         description: Email and password are required
     *       409:
     *         description: Email already exists
     *       500:
     *         description: Internal server error
     */
    register(req: Request, res: Response): Promise<Response>;
}
