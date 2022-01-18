'use strict';

const { text } = require("express");
const { DATE } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Tvshows', [{
        name: 'The Notebook',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pokemon First Movie',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Cartoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AA',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 5,
        genre: 'Educational',
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
      return queryInterface.bulkDelete('Tvshows', null, {});
  }
};
