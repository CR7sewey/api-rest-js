import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Cmapo nome nao pode ficar vazio.',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Cmapo nome nao pode ficar vazio.',
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/${this.getDataValue('filename')}`;
          },

        },

      },
      {
        sequelize,
        tableName: 'photos',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
