import express, { Express } from 'express';
import boxersRouter from './boxers.router'

const routerApi = (app: Express) => {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/boxers', boxersRouter);
}

export default routerApi;
