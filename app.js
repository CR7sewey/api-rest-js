import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';
import express from 'express';
import home from './src/routes/home';
import user from './src/routes/user';
import token from './src/routes/token';
import aluno from './src/routes/aluno';
import photo from './src/routes/photo';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users/', user);
    this.app.use('/tokens/', token);
    this.app.use('/alunos/', aluno);
    this.app.use('/photos/', photo);
  }
}

export default new App().app; // exportar express da classe
