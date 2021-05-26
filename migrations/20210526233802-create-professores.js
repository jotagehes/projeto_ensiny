'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('professores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resumo: {
        type: Sequelize.STRING
      },
      professor: {
        type: Sequelize.BOOLEAN
      },
      disciplinas: {
        type: Sequelize.STRING
      },
      aulagratis: {
        type: Sequelize.BOOLEAN
      },
      valormulta: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('professores');
  }
};