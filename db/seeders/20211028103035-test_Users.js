'use strict';

const faker = require('faker');

const seedTeachers = [];
const seedParents = [];

for (let i = 0; i < 10; i++) {
  const optionsTeach = {
    role: 'teacher',
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.phoneNumber(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  seedTeachers.push(optionsTeach);
}

for (let i = 0; i < 20; i++) {
  const optionsParent = {
    role: i % 2 === 0 ? 'parent' : 'teacher',
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.phoneNumber(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  seedParents.push(optionsParent);
}
console.log(seedTeachers);
module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', seedParents);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
