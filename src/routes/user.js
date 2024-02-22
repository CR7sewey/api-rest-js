import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// ROTAS DA user - quem controla as rotas

// NAO DEVERIA EXISTIR
router.get('/', userController.index); // Lista usuarios
router.get('/:id', userController.show);

// Reais!
// tirei id pq ele so pode editar os seus, o id vem no token!!
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
router.post('/', userController.store);

export default router;

/*
listar -> index -> GET
criar -> store/create -> POST
apagar -> delete -> DELETE
mostrar -> show -> GET
update -> atualizar -> PATCH ou PUT
*/
