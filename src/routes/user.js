import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// ROTAS DA user - quem controla as rotas
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.post('/', userController.store);

export default router;

/*
listar -> index -> GET
criar -> store/create -> POST
apagar -> delete -> DELETE
mostrar -> show -> GET
update -> atualizar -> PATCH ou PUT
*/
