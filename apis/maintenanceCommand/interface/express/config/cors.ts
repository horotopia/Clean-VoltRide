import cors from 'cors';
import { Application } from 'express';
import { Logger } from './logger';
import { config } from 'dotenv';

config();
const logger = Logger.get();

const configureCORS = (app: Application) => {
  const corsOptions = {
    origin: (origin: string | undefined, callback: Function) => {
      if (!origin) {
        callback(null, true);
        return;
      }

      const allowedOrigins = process.env.ALLOWED_ORIGINS;
      if (!allowedOrigins) {
        callback(new Error("Request from unauthorized origin"));
        return;
      }

      const origins = allowedOrigins.split(" ");
      if (origins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Request from unauthorized origin"));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));

  logger.info('Cors has been enabled');
};

export default configureCORS;
