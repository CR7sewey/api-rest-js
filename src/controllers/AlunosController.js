import Aluno from '../models/Aluno';
import Photo from '../models/Photo';

class AlunoController {
  async index(req, res, next) {
    try {
      const alunos = await Aluno.findAll({
        order: [['id', 'DESC']], // , [Photo, 'id', 'DESC']],
        // include: {
        // model: Photo,
        // attributes: ['url','filename'],
        // },
      });

      return res.json(alunos);
    } catch (e) {
      return res.json(null);
    }
  }

  async store(req, res, next) {
    try {
      const alunos = await Aluno.create(req.body);
      return res.json(alunos);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async show(req, res, next) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Invalid id'] });
      }
      const alunos = await Aluno.findByPk(req.params.id, {
        order: [['id', 'DESC']], // , [Photo, 'id', 'DESC']],
        // include: {
        // model: Photo,
        // attributes: ['url','filename'],
        // },
      });

      if (!alunos) {
        return res.status(400).json({ errors: ['Aluno nao existe!'] });
      }
      return res.json(alunos);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async update(req, res, next) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Invalid id'] });
      }
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({ errors: ['Missing aluno'] });
      }
      const novo = await aluno.update(req.body);
      return res.json(novo);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  async delete(req, res, next) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ['Invalid id'] });
      }
      const alunos = await Aluno.findByPk(req.params.id);
      if (!alunos) {
        return res.status(400).json({ errors: ['Aluno nao existe!'] });
      }
      await alunos.destroy();
      return res.json({ apagado: true });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }
}

// tenho de mandar a isntancia
export default new AlunoController();
