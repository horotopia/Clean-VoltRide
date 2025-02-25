import { Request, Response, NextFunction } from "express";
import { LoginUseCase } from "../../../application/usecases/auth/login.usecase";
import { config } from "dotenv";
import { TokenHelper } from "../../../shared/helpers/token.helper";
import connectDB from "../../../infrastructure/databases/database";
import { RepositoryError } from "../../../application/errors/repository-error";
import { BadRequestError } from "../../../application/errors";

config();

export class SignInController {
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

  async login(req: Request, res: Response): Promise<Response> {
    try {
      if (!process.env.DB_TYPE) {
        throw new RepositoryError(); // DB_TYPE environment variable is not defined
      }
      const database = await connectDB(process.env.DB_TYPE);
      const userRepo =
        database && "userRepository" in database
          ? await database.userRepository
          : null;
      const tokenService = new TokenHelper();
      if (!userRepo) {
        throw new RepositoryError(); // User repository is not available
      }
      const loginUseCase = new LoginUseCase(userRepo, tokenService);

      if (
        !req.body ||
        typeof req.body.email !== "string" ||
        typeof req.body.password !== "string"
      ) {
        res.status(400);
        throw new BadRequestError(); // Email and password are required
      }

      const token = await loginUseCase.execute(req.body);
      return res.status(201).json({ token });
    } catch (error) {
      if (!res.statusCode) {
        res.status(500);
      }
      return res;
    }
  }
}
