import { NextFunction, Request, Response } from "express";
declare const generateToken: (user: any) => string;
declare const authenticateToken: (req: Request, res: Response, next: NextFunction) => void;
export { authenticateToken, generateToken };
