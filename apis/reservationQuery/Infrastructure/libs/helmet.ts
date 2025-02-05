import helmet from 'helmet';
import { Application } from 'express';
import { Logger } from './logger';

const logger = Logger.get();

const configureHelmet = (app: Application) => {
  app.use(helmet());
  logger.info('Helmet has been enabled');
}

export default configureHelmet;