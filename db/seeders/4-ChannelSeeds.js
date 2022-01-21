'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Channels', [{
        title: 'Scary shows',
        tvShowId: 5,
        coverPicture: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        title: 'Funny shows',
        tvShowId: 7,
        coverPicture: null,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        title: 'Drama shows',
        tvShowId: 6,
        coverPicture: null,
        createdAt: new Date(),
        updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Channels', null, {

      });
  }
};
