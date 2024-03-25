'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_roles', {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      role_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
    })
      .then(() => queryInterface.addConstraint('users_roles',  {
        type: 'FOREIGN KEY',
        fields: ['user_id'], 
        references: {
          table: 'users',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      }))
      .then(() => queryInterface.addConstraint('users_roles', {
        type: 'FOREIGN KEY',
        fields: ['role_id'], 
        references: {
          table: 'roles',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      }))
    ;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users_roles');
  }
};
