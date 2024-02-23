import { Router } from 'express';
import multer from 'multer';
import photoController from '../controllers/PhotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

// ROTAS DA HOME - quem controla as rotas
router.post('/', upload.single('file'), photoController.store); // file do insomnia

export default router;
