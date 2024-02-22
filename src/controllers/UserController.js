import User from '../models/User';

class UserController {
  // CREATE
  async store(req, res, next) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      // errors é array podemos entaom usar o map
      return res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  // Read
  async index(req, res, next) {
    try {
      const novoUser = await User.findAll();
      return res.json(novoUser);
    } catch (e) {
      // errors é array podemos entaom usar o map
      return res.json(null);
    }
  }

  // Show
  async show(req, res, next) {
    try {
      const novoUser = await User.findByPk(req.params.id);
      return res.json(novoUser);
    } catch (e) {
      // errors é array podemos entaom usar o map
      return res.json(null);
    }
  }

  // Update
  async update(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Missing ID'] });
      }
      // console.log('----', id);
      const novoUser = await User.findByPk(req.params.id);
      if (!novoUser) {
        return res.status(400).json({ errors: ['Missing user'] });
      }

      await novoUser.update(req.body);
      return res.json(novoUser);
    } catch (e) {
      // errors é array podemos entaom usar o map
      console.log(e);
      return res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }

  // DELETE
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Missing ID'] });
      }
      // console.log('----', id);
      const novoUser = await User.findByPk(req.params.id);
      if (!novoUser) {
        return res.status(400).json({ errors: ['Missing user'] });
      }

      await novoUser.destroy();
      return res.json(novoUser);
    } catch (e) {
      // errors é array podemos entaom usar o map
      console.log(e);
      return res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }
}

// tenho de mandar a isntancia
export default new UserController();
