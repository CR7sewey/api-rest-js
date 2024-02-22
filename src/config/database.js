require('dotenv').config();

module.exports = {
  /* SQLite */
  dialect: 'sqlite',
  storage: './db.sqlite',

  /* MySQL / MariaDB */
  // dialect: 'mysql',
  // host: process.env.MYSQL_HOST,
  // port: process.env.MYSQL_PORT,
  // username: process.env.MYSQL_USERNAME,
  // password: process.env.MYSQL_PASSWORD,
  // database: process.env.MYSQL_DATABASE,
  // dialectOptions: {
  //   timezone: 'America/Sao_Paulo',
  // },
  // timezone: 'America/Sao_Paulo',

  /* ALL - quando regist criado e atualizado */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
