const bcrypt = require('bcryptjs');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [{
       firstName: 'John Doe',
       lastName:'Doe',
       email:'jonh.doe@gmail.com',
       password:bcrypt.hashSync('secret', 10),
       gender:'male'  
     },
    {
      firstName: 'Julio',
      lastName:'Neves',
      email:'julio.neves@gmail.com',
      password:bcrypt.hashSync('secret', 10),
      gender:'male'
    },
  {
  firstName: 'Maria',
  lastName:'santa',
  email:'maria.santa@gmail.com',
  password:bcrypt.hashSync('secret', 10),
  gender:'female'
}]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
