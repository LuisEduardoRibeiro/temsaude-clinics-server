'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('clinics', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ds_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ds_cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      ds_logradouro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ds_numero: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ds_complemento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ds_bairro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ds_cidade: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ds_estado: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ds_pais: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ds_latitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ds_longitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clinics');
  }
};
