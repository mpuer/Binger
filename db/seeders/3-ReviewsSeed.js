'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [{
      review: 'Really bad show, wasted my time.',
      rating: 2,
      tvShowId: 1,
      usersId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'Great kids show! 10/10 would watch again.',
      rating: 5,
      tvShowId: 2,
      usersId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'Really good documentary about juco colleges football programs!',
      rating: 4,
      tvShowId: 3,
      usersId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'I wish I was spiderman.',
      rating: 5,
      tvShowId: 4,
      usersId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'Almost made me pee my pants!',
      rating: 4,
      tvShowId: 5,
      usersId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'The show was ok, nothing great or bad about it.',
      rating: 3,
      tvShowId: 6,
      usersId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'So friggin hilarious, watched so many times already!',
      rating: 5,
      tvShowId: 7,
      usersId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'One of the best comedy shows around, definitely a must watch!',
      rating: 5,
      tvShowId: 8,
      usersId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'Watched this with my daughters and found I quite enjoyed it.',
      rating: 4,
      tvShowId: 9,
      usersId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'A documentary about the GOAT? Say less.',
      rating: 1,
      tvShowId: 10,
      usersId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'What a great show about zombies! Must watch!',
      rating: 5,
      tvShowId: 11,
      usersId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      review: 'Really entertaining show',
      rating: 4,
      tvShowId: 12,
      usersId: 1,
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
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
