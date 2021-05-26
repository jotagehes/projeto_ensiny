'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Pessoas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                type: Sequelize.STRING
            },
            sobrenome: {
                type: Sequelize.STRING
            },
            dtnascimento: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            celular: {
                type: Sequelize.STRING
            },
            sexo: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Pessoas');
    }
};