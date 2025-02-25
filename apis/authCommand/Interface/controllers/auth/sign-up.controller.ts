import { Request, Response, NextFunction } from "express";
import { RegisterUseCase } from '../../../application/usecases/auth/register.usecase';
import { config } from "dotenv";
import { TokenHelper } from "../../../shared/helpers/token.helper";
import connectDB from "../../../infrastructure/databases/database";
import { RepositoryError } from "../../../application/errors/repository-error";
import { BadRequestError } from "../../../application/errors";

config();

let registerUseCaseInstance: RegisterUseCase | null = null;

async function getRegisterUseCase(): Promise<RegisterUseCase> {
  if (registerUseCaseInstance) return registerUseCaseInstance;

  if (!process.env.DB_TYPE) {
    throw new RepositoryError();
  }

  const database = await connectDB(process.env.DB_TYPE);
  const userRepo = database && 'userRepository' in database ? await database.userRepository : null;

  if (!userRepo) {
    throw new RepositoryError();
  }

  const tokenService = new TokenHelper();
  registerUseCaseInstance = new RegisterUseCase(userRepo, tokenService);
  return registerUseCaseInstance;
}

export class SignUpController {
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

      const registerUseCase = await getRegisterUseCase();
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