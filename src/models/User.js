import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// sequelize usa validator
export default class User extends Model {
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
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50], // tamanho de caraters
              msg: 'Senha tem de ter entre 6 e 50 caracteres!',
            },
          },
        },

      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
