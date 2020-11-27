'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [queryInterface.addColumn(
      'users',
      'password',
      {
        type: Sequelize.STRING
      }
    ),
    queryInterface.addColumn(
      'users',
      'email',
      {
        type: Sequelize.STRING
      }
    )]
  },

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn('users', 'password'),
      queryInterface.removeColumn('users', 'email')
    ]
  }
};
