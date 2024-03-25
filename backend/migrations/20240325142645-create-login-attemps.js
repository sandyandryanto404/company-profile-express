'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('login_attempts', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED
        },
        ip_address: {
          type: Sequelize.STRING(191)
        },
        login: {
          type: Sequelize.STRING(255)
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
      .then(() => queryInterface.addIndex('login_attempts', ['ip_address']))
      .then(() => queryInterface.addIndex('login_attempts', ['login']))
      .then(() => queryInterface.addIndex('login_attempts', ['created_at']))
      .then(() => queryInterface.addIndex('login_attempts', ['updated_at']))
    ;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('login_attempts');
  }
};
