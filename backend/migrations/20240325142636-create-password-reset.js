'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('passwords_resets', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED
        },
        email: {
          type: Sequelize.STRING(191)
        },
        token: {
          type: Sequelize.STRING
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
      .then(() => queryInterface.addIndex('passwords_resets', ['email']))
      .then(() => queryInterface.addIndex('passwords_resets', ['token']))
      .then(() => queryInterface.addIndex('passwords_resets', ['created_at']))
      .then(() => queryInterface.addIndex('passwords_resets', ['updated_at']))
    ;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('passwords_resets');
  }
};
