import { Router } from 'express';
import photoController from '../controllers/PhotoController';

const router = new Router();

// ROTAS DA HOME - quem controla as rotas
router.post('/', photoController.store); // file do insomnia

export default router;
