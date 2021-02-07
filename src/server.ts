import express, { Express } from 'express';

import routes from './routes';

class AppServer {
  public express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(routes);
  }
}

export default new AppServer().express;
