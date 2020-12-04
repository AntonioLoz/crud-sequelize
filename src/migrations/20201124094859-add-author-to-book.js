'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'books', 
      'IdAuthor',
      {
        type:Sequelize.INTEGER,
        references:{
          model:'authors',
          key:'id',

        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
      }
    );
    
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'books',
      'idAuthor'
    );
    
  }
};
