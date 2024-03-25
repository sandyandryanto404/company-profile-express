'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('users_notifications', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED
        },
        user_id: {
          type: Sequelize.BIGINT.UNSIGNED
        },
        subject: {
          type: Sequelize.STRING,
          allowNull: true
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true
        },
        content: {
          type: Sequelize.TEXT('long')
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
      .then(() => queryInterface.addIndex('users_notifications', ['user_id']))
      .then(() => queryInterface.addIndex('users_notifications', ['subject']))
      .then(() => queryInterface.addIndex('users_notifications', ['description']))
      .then(() => queryInterface.addIndex('users_notifications', ['status']))
      .then(() => queryInterface.addIndex('users_notifications', ['created_at']))
      .then(() => queryInterface.addIndex('users_notifications', ['updated_at']))
      .then(() => queryInterface.addConstraint('users_notifications',  {
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
    await queryInterface.dropTable('users_notifications');
  }
};
