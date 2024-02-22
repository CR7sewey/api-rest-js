import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

// ROTAS DA HOME - quem controla as rotas
router.post('/', tokenController.store);

export default router;
