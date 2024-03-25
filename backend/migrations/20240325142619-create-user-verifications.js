'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
       await queryInterface.createTable('users_verifications', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.BIGINT.UNSIGNED
          },
          user_id: {
            type: Sequelize.BIGINT.UNSIGNED
          },
          token: {
            type: Sequelize.STRING
          },
          status: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
          },
          expired_at: {
            allowNull: false,
            type: Sequelize.DATE
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
        .then(() => queryInterface.addIndex('users_verifications', ['user_id']))
        .then(() => queryInterface.addIndex('users_verifications', ['token']))
        .then(() => queryInterface.addIndex('users_verifications', ['status']))
        .then(() => queryInterface.addIndex('users_verifications', ['expired_at']))
        .then(() => queryInterface.addIndex('users_verifications', ['created_at']))
        .then(() => queryInterface.addIndex('users_verifications', ['updated_at']))
        .then(() => queryInterface.addConstraint('users_verifications',  {
          type: 'FOREIGN KEY',
          fields: ['user_id'], 
          references: {
            table: 'users',
            field: 'id',
          },
          onDelete: 'no action',
          onUpdate: 'no action',
        }))
      ;
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users_verifications');
  }
};
