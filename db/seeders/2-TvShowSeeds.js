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
        name: 'Euphoria',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pokemon',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Cartoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Magic School Bus',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 5,
        genre: 'Educational',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spiderman',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 5,
        genre: 'Cartoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Stand',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Scary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'NCIS',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Office',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '30 Rock',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Afterlife',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Blues Clues',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Educational',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sesame Street',
        image: null,
        showtime: new Date(),
        synopsis: 'text',
        rating: 4,
        genre: 'Cartoon',
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
