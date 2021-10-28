'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      role: 'Admin',
      first_name: 'Admin',
      last_name: 'Admin',
      email: 'admin@admin.com',
      password: cryptPass,
      phone: '+70000000000',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
