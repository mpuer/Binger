'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Users', [{
        username: 'John Doe',
        hashedPassword: 'password',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Joe Biden',
        hashedPassword: 'president',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'George Bush',
        hashedPassword: 'president',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'George Washington',
        hashedPassword: 'president',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Jimmy Carter',
        hashedPassword: 'president',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Barack Obama',
        hashedPassword: 'president',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Donald Trump',
        hashedPassword: 'president',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'John F Kennedy',
        hashedPassword: 'president',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Abraham Lincoln',
        hashedPassword: 'president',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Ronald Reagan',
        hashedPassword: 'president',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Thomas Jefferson',
        hashedPassword: 'president',
        profilePic: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'John Adams',
        hashedPassword: 'president',
        profilePic: null,
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
      return queryInterface.bulkDelete('Users', null, {

      });
  }
};
