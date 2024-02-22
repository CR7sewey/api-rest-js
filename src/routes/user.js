import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

// ROTAS DA user - quem controla as rotas
router.post('/', userController.store);

export default router;

/*
listar -> index -> GET
criar -> store/create -> POST
apagar -> delete -> DELETE
mostrar -> show -> GET
update -> atualizar -> PATCH ou PUT
*/
