'use strict';
const bcrypt = require('bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let adminPass = 'qwerty'
    const cryptPass = await bcrypt.hash(adminPass, Number(process.env.SALT_ROUND))
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
    return queryInterface.bulkDelete('Users', null, {});

  }
};
