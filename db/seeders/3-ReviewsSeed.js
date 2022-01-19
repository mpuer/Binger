'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [{
    review: 'Good',
    rating: 5,
    tvShowId: 1,
    usersId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    review: 'Meh',
    rating: 3,
    tvShowId: 1,
    usersId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    review: 'Bad',
    rating: 2,
    tvShowId: 1,
    usersId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    review: 'Bad',
    rating: 2,
    tvShowId: 2,
    usersId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    review: 'Really bad',
    rating: 1,
    tvShowId: 3,
    usersId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
