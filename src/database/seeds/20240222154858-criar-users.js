const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      nome: 'Miguel',
      email: 'miguelito@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      nome: 'Miguel2',
      email: 'miguelito2@gmail.com',
      password_hash: await bcryptjs.hash('1234567', 8),
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      nome: 'Miguel3',
      email: 'miguelito3@gmail.com',
      password_hash: await bcryptjs.hash('1234568', 8),
      created_at: new Date(),
      updated_at: new Date(),

    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
