import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255], // tamanho de caraters
              msg: 'Cmapo nome nao pode ficar vazio, entre 3 e 255 caracteres.',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255], // tamanho de caraters
              msg: 'Cmapo sobrenome nao pode ficar vazio, entre 3 e 255 caracteres.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'THis email is already registered!',
          },
          validate: {
            isEmail: {
              msg: 'Email incvalido',
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {

              msg: 'Idade tem de ser inteiro.',
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {

              msg: 'Pese tem de ser float/inteiro.',
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {

              msg: 'Altura tem de ser float/inteiro.',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
