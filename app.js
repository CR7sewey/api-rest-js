import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import home from './src/routes/home';
import user from './src/routes/user';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users/', user);
  }
}

export default new App().app; // exportar express da classe
