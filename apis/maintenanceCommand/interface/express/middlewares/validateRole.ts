import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { MongooseService } from "../services/mongoose";
import { Role } from "../models";

const SECRET_KEY: string | undefined = process.env.JWT_SECRET;

const getUser = async (req: Request, res: Response) => {
  if (!SECRET_KEY) {
    res.status(500);
    throw new Error("JWT_SECRET is not defined");
  }

  const authHeader = req.headers["authorization"];
  const jwtToken = authHeader && authHeader.split(" ")[1];

  if (!jwtToken) {
    res.status(401);
    throw new Error("No token, authorization denied");
  }

  const decoded = jwt.verify(jwtToken, SECRET_KEY) as jwt.JwtPayload;

  const mongooseService = await MongooseService.get();
  const user = await mongooseService.userService.findById(decoded.id);
  if (!user) {
    res.status(401);
    throw new Error("Authentication failed");
  }
  return user;
};

export const validateRole = async (
  req: Request,
  res: Response,
  next: NextFunction,
  role: Role[]
) => {
  try {
    const user = await getUser(req, res);
    if (role.length === 1) {
      if (user.role !== role[0]) {
        res.status(403);
        throw new Error("Unauthorized");
      }
      next();
    }
    if (role.length === 2) {
      if (user.role !== role[0] && user.role !== role[1]) {
        res.status(403);
        throw new Error("Unauthorized");
      }
      next();
    }
    if (role.length === 3) {
      if (
        user.role !== role[0] &&
        user.role !== role[1] &&
        user.role !== role[2]
      ) {
        res.status(403);
        throw new Error("Unauthorized");
      }
      next();
    }
  } catch (error) {
    if (!res.statusCode) {
      res.status(500);
    }
    next(error);
  }
};

export const validateRoleAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRole(req, res, next, [Role.Admin]);
};
export const validateRoleOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRole(req, res, next, [Role.Owner]);
};
export const validateRoleCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRole(req, res, next, [Role.Customer]);
};
export const validateRoleAdminOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRole(req, res, next, [Role.Admin, Role.Owner]);
};
export const validateRoleAdminCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRole(req, res, next, [Role.Admin, Role.Customer]);
};
export const validateRoleOwnerCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRole(req, res, next, [Role.Owner, Role.Customer]);
};
export const validateRoleAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRole(req, res, next, [Role.Admin, Role.Owner, Role.Customer]);
};
