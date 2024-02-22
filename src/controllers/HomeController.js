import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res, next) {
    res.json('Index');
  }
}

// tenho de mandar a isntancia
export default new HomeController();
