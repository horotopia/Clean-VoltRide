import { Request, Response, NextFunction } from "express";
import { RegisterUseCase } from '../../../application/usecases/auth/register.usecase';
import { config } from "dotenv";
import { TokenHelper } from "../../../shared/helpers/token.helper";
import connectDB from "../../../infrastructure/databases/database";
import { RepositoryError } from "../../../application/errors/repository-error";
import { BadRequestError } from "../../../application/errors";

config();

export class SignUpController {
  async register(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.body || !req.body.email || !req.body.password) {
        res.status(400);
        throw new BadRequestError(); // Email and password are required
      }

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

      console.log('req.body', req.body);
      const registerUseCase = await getRegisterUseCase();
      const token = await registerUseCase.execute(req.body);

      console.log('token', token);
      return res.status(201).json({token});
    } catch (error) {
      if (!res.statusCode) {
        res.status(500);
      }
      return res;
    }
  }
}