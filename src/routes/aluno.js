import { Router } from 'express';
import alunoController from '../controllers/AlunosController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// ROTAS Dos alunos - quem controla as rotas

// NAO DEVERIA EXISTIR
router.get('/', alunoController.index); //
router.get('/:id', alunoController.show); //
router.post('/', loginRequired, alunoController.store); //
router.put('/:id', loginRequired, alunoController.update); //
router.delete('/:id', loginRequired, alunoController.delete); //

export default router;

/*
listar -> index -> GET
criar -> store/create -> POST
apagar -> delete -> DELETE
mostrar -> show -> GET
update -> atualizar -> PATCH ou PUT
*/
