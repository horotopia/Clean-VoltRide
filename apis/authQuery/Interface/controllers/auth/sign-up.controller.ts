import { Request, Response, NextFunction } from "express";
import { RegisterUseCase } from '../../../application/usecases/auth/register.usecase';
import { config } from "dotenv";
import { TokenHelper } from "../../../shared/helpers/token.helper";
import connectDB from "../../../infrastructure/databases/database";
import { RepositoryError } from "../../../application/errors/repository-error";
import { BadRequestError } from "../../../application/errors";

config();
if (!process.env.DB_TYPE) {
  throw new RepositoryError(); // DB_TYPE environment variable is not defined
}
const database = await connectDB(process.env.DB_TYPE);
const userRepo = database && 'userRepository' in database ? await database.userRepository : null;
const tokenService = new TokenHelper();
if (!userRepo) {
  throw new RepositoryError(); // User repository is not available
}
const registerUseCase = new RegisterUseCase(userRepo, tokenService);

export class SignInController {
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
  async register(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.body || !req.body.email || !req.body.password) {
        res.status(400);
        throw new BadRequestError(); // Email and password are required
      }

      const token = await registerUseCase.execute(req.body);
      return res.json({token});

    } catch (error) {
      if (!res.statusCode) {
        res.status(500);
      }
      return res;
    }
  }
}