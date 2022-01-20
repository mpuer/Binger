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
        name: 'Bridgerton',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'romance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pokemon',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'cartoons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Last Chance U',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 5,
        genre: 'documentary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spiderman',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 5,
        genre: 'cartoons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Haunting of Hill House ',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cobra Kai',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'drama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Office',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'comedy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '30 Rock',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'comedy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dawson's Creek",
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'romance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Last Dance',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'documentary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kingdom',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ozark',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'drama',
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
      return queryInterface.bulkDelete('Tvshows', null, {});
  }
};
