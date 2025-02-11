import { Request, Response, NextFunction, Router } from "express";
import { MongooseService } from "../services/mongoose";
import {
  validateRole,
  validateRoleAdmin,
  validateRoleCustomer,
  validateRoleOwner,
} from "../middlewares/validateRole";

export class UserController {
  /**
   * @swagger
   * /user:
   *   get:
   *     summary: Retrieve a list of users
   *     tags: [Users]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: A list of users
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/User'
   *       500:
   *         description: Internal server error
   */
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const mongooseService = await MongooseService.get();
      const users = await mongooseService.userService.find();
      res.status(200).json(users);
      return;
    } catch (error) {
      if (!res.statusCode) {
        res.status(500);
      }
      next(error);
    }
  }

  /**
   * @swagger
   * /user/{id}:
   *   get:
   *     summary: Retrieve a single user by ID
   *     tags: [Users]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The user ID
   *     responses:
   *       200:
   *         description: A single user
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       404:
   *         description: User not found
   *       500:
   *         description: Internal server error
   */
  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.params.id) {
        res.status(400);
        throw new Error("User id is required");
      }
      const mongooseService = await MongooseService.get();
      const user = await mongooseService.userService.findById(req.params.id);
      if (!user) {
        res.status(404);
        throw new Error("User not found");
      }
      res.status(200).json(user);
      return;
    } catch (error) {
      if (!res.statusCode) {
        res.status(500);
      }
      next(error);
    }
  }

  /**
   * @swagger
   * /user/{id}:
   *   put:
   *     summary: Update a user by ID
   *     tags: [Users]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The user ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/User'
   *     responses:
   *       200:
   *         description: The updated user
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/User'
   *       400:
   *         description: User data are required
   *       404:
   *         description: User not found
   *       500:
   *         description: Internal server error
   */
  async modifyUser(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.params.id) {
        res.status(400);
        throw new Error("User id is required");
      }
      if (!req.body) {
        res.status(400);
        throw new Error("User data are required");
      }

      const mongooseService = await MongooseService.get();
      const userFound = await mongooseService.userService.findById(
        req.params.id
      );
      if (!userFound) {
        res.status(404);
        throw new Error("User not found");
      }
      const user = await mongooseService.userService.update(
        req.params.id,
        req.body
      );
      res.status(200).json(user);
      return;
    } catch (error) {
      if (!res.statusCode) {
        res.status(500);
      }
      next(error);
    }
  }

  /**
   * @swagger
   * /user/{id}:
   *   delete:
   *     summary: Delete a user by ID
   *     tags: [Users]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The user ID
   *     responses:
   *       204:
   *         description: No content
   *       400:
   *         description: User id is required
   *       404:
   *         description: User not found
   *       500:
   *         description: Internal server error
   */
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.params.id) {
        res.status(400);
        throw new Error("User id is required");
      }
      const mongooseService = await MongooseService.get();
      const user = await mongooseService.userService.findById(req.params.id);
      if (!user) {
        res.status(404);
        throw new Error("User not found");
      }
      await mongooseService.userService.delete(req.params.id);
      res.status(204).send();
      return;
    } catch (error) {
      if (!res.statusCode) {
        res.status(500);
      }
      next(error);
    }
  }

  buildRouter(): Router {
    const router = Router();
    router.get("/", validateRoleAdmin, this.getUsers.bind(this));
    router.get("/:id", validateRoleCustomer, this.getUser.bind(this));
    router.put("/:id", validateRoleCustomer, this.modifyUser.bind(this));
    router.delete("/:id", validateRoleAdmin, this.deleteUser.bind(this));
    return router;
  }
}
