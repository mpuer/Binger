'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Usershows', [
   {
     channelId: 1,
     usersId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     channelId: 2,
     usersId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     channelId: 1,
     usersId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     channelId: 2,
     usersId: 2,
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     channelId: 3,
     usersId: 5,
     createdAt: new Date(),
     updatedAt: new Date()
   },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Usershows', null, {});
  }
};
