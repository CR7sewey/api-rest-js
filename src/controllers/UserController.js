import User from '../models/User';

class UserController {
  async store(req, res, next) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      // errors é array podemos entaom usar o map
      res.status(400).json({ errors: e.errors.map((erro) => erro.message) });
    }
  }
}

// tenho de mandar a isntancia
export default new UserController();
