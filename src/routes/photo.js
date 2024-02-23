import { Router } from 'express';
import photoController from '../controllers/PhotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// ROTAS DA HOME - quem controla as rotas
router.post('/', loginRequired, photoController.store); // file do insomnia

export default router;
