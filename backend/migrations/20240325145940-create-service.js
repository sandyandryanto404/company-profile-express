"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("services", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED,
        },
        icon: {
          type: Sequelize.STRING(64),
          allowNull: true,
        },
        title: {
          type: Sequelize.STRING(191),
          allowNull: false,
        },
        description: {
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
      .then(() => queryInterface.addIndex("services", ["icon"]))
      .then(() => queryInterface.addIndex("services", ["title"]))
      .then(() => queryInterface.addIndex("services", ["sort"]))
      .then(() => queryInterface.addIndex("services", ["status"]))
      .then(() => queryInterface.addIndex("services", ["created_at"]))
      .then(() => queryInterface.addIndex("services", ["updated_at"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("services");
  },
};
