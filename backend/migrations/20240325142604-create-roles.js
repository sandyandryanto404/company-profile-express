'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED
        },
        code: {
          type: Sequelize.STRING,
          unique: true
        },
        name: {
          type: Sequelize.STRING,
          unique: true
        },  
        description: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        status: {
          type: Sequelize.TINYINT,
          defaultValue: 0,
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
      .then(() => queryInterface.addIndex('roles', ['code']))
      .then(() => queryInterface.addIndex('roles', ['name']))
      .then(() => queryInterface.addIndex('roles', ['status']))
      .then(() => queryInterface.addIndex('roles', ['created_at']))
      .then(() => queryInterface.addIndex('roles', ['updated_at']))
    ;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};
