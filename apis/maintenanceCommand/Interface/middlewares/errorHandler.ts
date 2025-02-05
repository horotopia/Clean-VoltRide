import { NextFunction, Request, Response } from "express";
import { Logger } from "../config/logger";

const logger = Logger.get();

const errorHandler = () => {
  return (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = res.statusCode;
    if (statusCode === 500) {
      logger.error(
        new Error(
          `${statusCode}: ${req.method} ${req.url} - clientIP: ${req.ip}, errorStack: ${err.stack}, url: ${req.originalUrl}, method: ${req.method}, ip: ${req.ip}`
        )
      );
    }
    if ([400, 401, 403, 404, 409].includes(statusCode)) {
      logger.warn(
        `${statusCode}: ${req.method} ${req.url} - clientIP: ${req.ip}, errorMessage: ${err.message}, url: ${req.originalUrl}, method: ${req.method}, ip: ${req.ip}`
      );
    }

    res.status(statusCode).json({
      message: err.message,
      ...(process.env.MODE_ENV === "production" ? null : { stack: err.stack }),
    });
  };
};

export default errorHandler;
