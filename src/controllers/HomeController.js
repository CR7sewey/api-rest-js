import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res, next) {
    const novoAluno = await Aluno.create({
      nome: 'Miguel',
      sobrenome: 'Miguel',
      email: 'miguel@gmial.com',
      idade: 24,
      peso: 85,
      altura: 1.84,

    });
    res.json(novoAluno);
  }
}

// tenho de mandar a isntancia
export default new HomeController();
