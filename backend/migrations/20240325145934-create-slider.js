"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("sliders", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED,
        },
        image: {
          type: Sequelize.STRING,
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
        link: {
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
      .then(() => queryInterface.addIndex("sliders", ["image"]))
      .then(() => queryInterface.addIndex("sliders", ["title"]))
      .then(() => queryInterface.addIndex("sliders", ["sort"]))
      .then(() => queryInterface.addIndex("sliders", ["status"]))
      .then(() => queryInterface.addIndex("sliders", ["created_at"]))
      .then(() => queryInterface.addIndex("sliders", ["updated_at"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sliders");
  },
};
