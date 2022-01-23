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
        image: '/images/bridgerton.jpg',
        showtime: new Date(2022, 1, 24, 20),
        synopsis: 'Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.',
        rating: 2,
        genre: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pokemon',
        image: '/images/pokemon.png',
        showtime: new Date(2022, 1, 25, 7),
        synopsis: 'Ash Ketchum, his yellow pet Pikachu, and his human friends explore a world of powerful creatures.',
        rating: 5,
        genre: 'Cartoons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Last Chance U',
        image: '/images/last_chance_u.jpg',
        showtime: new Date(2022, 1, 25, 21),
        synopsis: 'Intense look inside the world of junior college football, chronicling the stories of players and coaches in the classroom and on the field.',
        rating: 4,
        genre: 'Documentary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spiderman',
        image: '/images/spiderman.jpeg',
        showtime: new Date(2022, 1, 25, 19),
        synopsis: 'A young man with spider-like abilities fights crime as a superhero in New York City while trying to have a normal personal life.',
        rating: 5,
        genre: 'Cartoons',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Haunting of Hill House ',
        image: '/images/the_haunting_of_hill_house.jpg',
        showtime: new Date(2022, 1, 24, 23),
        synopsis: 'Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.',
        rating: 4,
        genre: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cobra Kai',
        image: '/images/cobra_kai.jpeg',
        showtime: new Date(2022, 1, 24, 20),
        synopsis: 'Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.',
        rating: 3,
        genre: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Office',
        image: '/images/the_office.jpg',
        showtime: new Date(2022, 1, 24, 14, 30),
        synopsis: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
        rating: 5,
        genre: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '30 Rock',
        image: '/images/30_rock.jpg',
        showtime: new Date(2022, 1, 28, 21),
        synopsis: 'Liz Lemon, head writer of the sketch comedy show "TGS with Tracy Jordan", must deal with an arrogant new boss and a crazy new star, all while trying to run a successful television show without losing her mind.',
        rating: 5,
        genre: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dawson's Creek",
        image: '/images/dawsons_creek.jpg',
        showtime: new Date(2022, 1, 25, 19),
        synopsis: 'Four friends in a small coastal town help each other cope with adolescence.',
        rating: 4,
        genre: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Last Dance',
        image: '/images/the_last_dance.jpg',
        showtime: new Date(2022, 1, 26, 20),
        synopsis: `Charting the rise of the 1990's Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history.`,
        rating: 4,
        genre: 'Documentary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kingdom',
        image: '/images/kingdom.jpg',
        showtime: new Date(2022, 1, 29, 17),
        synopsis: 'While strange rumors about their ill King grip a kingdom, the crown prince becomes their only hope against a mysterious plague overtaking the land.',
        rating: 5,
        genre: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ozark',
        image: '/images/ozark.jpg',
        showtime: new Date(2022, 1, 27, 15),
        synopsis: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.',
        rating: 4,
        genre: 'Drama',
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
