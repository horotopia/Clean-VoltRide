import { Request, Response, NextFunction, Router } from "express";
import { MongooseService } from "../services/mongoose";
import { generateToken } from "../middlewares/jwt";
import { Bcrypt } from "../middlewares/bcrypt";
import { Role } from "../models/";

export class AuthController {
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
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.body || !req.body.email || !req.body.password) {
        res.status(400);
        throw new Error("Email and password are required");
      }

      const brcypt = new Bcrypt();
      const hashedPassword = await brcypt.hashPassword(req.body.password);

      const mongooseService = await MongooseService.get();
      const user = await mongooseService.userService.create({
        email: req.body.email,
        password: hashedPassword,
        role: Role.Customer,
      });

      res
        .status(201)
        .json({
          user: {
            email: user.email,
            role: user.role,
          },
        })
        .send();
    } catch (error) {
      if (
        error instanceof Error &&
        error.name === "MongooseError" &&
        error.message.startsWith("E11000 duplicate key")
      ) {
        res.status(409);
        new Error("Email already exists");
      }
      if (!res.statusCode) {
        res.status(500);
      }
      next(error);
    }
  }

  /**
   * @swagger
   * /auth/login:
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
   *                 description: The user's email
   *               password:
   *                 type: string
   *                 description: The user's password
   *     responses:
   *       200:
   *         description: The logged in user with token
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 user:
   *                   $ref: '#/components/schemas/User'
   *                 token:
   *                   type: string
   *       400:
   *         description: Email and password are required
   *       401:
   *         description: Invalid email or password
   *       500:
   *         description: Internal server error
   */
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.body || !req.body.email || !req.body.password) {
        res.status(400);
        throw new Error("Email and password are required");
      }
      const mongooseService = await MongooseService.get();
      const user = await mongooseService.userService.findByEmail(
        req.body.email
      );
      if (!user) {
        res.status(401);
        throw new Error("Invalid email or password");
      }

      const brcypt = new Bcrypt();
      const isPasswordValid = await brcypt.comparePassword(
        req.body.password,
        user.password
      );
      if (!isPasswordValid) {
        res.status(401);
        throw new Error("Invalid email or password");
      }

      const token = generateToken(user);
      res.status(200).json({
        user: {
          email: user.email,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      if (!res.statusCode) {
        res.status(500);
      }
      next(error);
    }
  }

  buildRouter(): Router {
    const router = Router();
    router.post("/register", this.register.bind(this));
    router.post("/login", this.login.bind(this));
    return router;
  }
}
