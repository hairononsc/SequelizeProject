'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'John',
        lastname: 'Doe',
        email: 'kenaa@example.com',
        phone: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'PEPE',
        lastname: 'Doe',
        email: 'kenaa@example.com',
        phone: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'asdsDS',
        lastname: 'Doe',
        email: 'kenaa@example.com',
        phone: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
