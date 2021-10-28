'use strict';

const faker = require('faker');

const seedChildren = []

for (let i = 1; i < 11; i++) {
const optionsChild = {
    name: faker.name.findName(),
    info: "i love chess!",
    age: faker.datatype.number(14),
    exp: "3 года не срок, а жизненный урок",
    user_id: i*2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  seedChildren.push(optionsChild)
  
}
console.log(seedChildren);
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Children', seedChildren);
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
