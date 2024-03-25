'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED
       },
       image: {
          type: Sequelize.STRING(191),
          allowNull: true
        },
       first_name: {
          type: Sequelize.STRING(191),
          allowNull: true
        },
        last_name: {
          type: Sequelize.STRING(191),
          allowNull: true
        },
        gender: {
          type: Sequelize.STRING(2),
          allowNull: true
        },
        country: {
          type: Sequelize.STRING(64),
          allowNull: true
        },
        province: {
          type: Sequelize.STRING(191),
          allowNull: true
        },
        regency: {
          type: Sequelize.STRING(191),
          allowNull: true
        },
        postal_code: {
          type: Sequelize.STRING(64),
          allowNull: true
        },
        birth_place: {
          type: Sequelize.STRING(191),
          allowNull: true
        },
        birth_date: {
          allowNull: true,
          type: Sequelize.DATE
        },
        facebook: {
          type: Sequelize.STRING(191),
          allowNull: true
        },
        instagram: {
          type: Sequelize.STRING(191),
          allowNull: true
        },
        twitter: {
          type: Sequelize.STRING(191),
          allowNull: true
        },
        address: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        about_me: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        username: {
          type: Sequelize.STRING(191),
          unique: true
        },
        email: {
          type: Sequelize.STRING(191),
          unique: true
        },
        phone: {
          type: Sequelize.STRING(191),
          allowNull: true,
          unique: true
        },
        password: {
          type: Sequelize.STRING
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
      .then(() => queryInterface.addIndex('users', ['first_name']))
      .then(() => queryInterface.addIndex('users', ['last_name']))
      .then(() => queryInterface.addIndex('users', ['gender']))
      .then(() => queryInterface.addIndex('users', ['country']))
      .then(() => queryInterface.addIndex('users', ['province']))
      .then(() => queryInterface.addIndex('users', ['regency']))
      .then(() => queryInterface.addIndex('users', ['postal_code']))
      .then(() => queryInterface.addIndex('users', ['birth_place']))
      .then(() => queryInterface.addIndex('users', ['birth_date']))
      .then(() => queryInterface.addIndex('users', ['facebook']))
      .then(() => queryInterface.addIndex('users', ['instagram']))
      .then(() => queryInterface.addIndex('users', ['twitter']))
      .then(() => queryInterface.addIndex('users', ['username']))
      .then(() => queryInterface.addIndex('users', ['email']))
      .then(() => queryInterface.addIndex('users', ['phone']))
      .then(() => queryInterface.addIndex('users', ['password']))
      .then(() => queryInterface.addIndex('users', ['status']))
      .then(() => queryInterface.addIndex('users', ['created_at']))
      .then(() => queryInterface.addIndex('users', ['updated_at']))
    ;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
