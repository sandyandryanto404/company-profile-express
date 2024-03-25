"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("customers", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED,
        },
        image: {
          type: Sequelize.STRING(191),
          allowNull: true,
        },
        name: {
          type: Sequelize.STRING(64),
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING(64),
          allowNull: true,
        },
        phone: {
          type: Sequelize.STRING(64),
          allowNull: true,
        },
        address: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        sort: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        status: {
          type: Sequelize.TINYINT,
          defaultValue: 0,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => queryInterface.addIndex("customers", ["image"]))
      .then(() => queryInterface.addIndex("customers", ["name"]))
      .then(() => queryInterface.addIndex("customers", ["email"]))
      .then(() => queryInterface.addIndex("customers", ["status"]))
      .then(() => queryInterface.addIndex("customers", ["sort"]))
      .then(() => queryInterface.addIndex("customers", ["created_at"]))
      .then(() => queryInterface.addIndex("customers", ["updated_at"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("customers");
  },
};
