import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

// ROTAS DA HOME - quem controla as rotas
router.get('/', homeController.index);

export default router;
