"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("faqs", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED,
        },
        question: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        answer: {
          type: Sequelize.TEXT,
          allowNull: false,
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
      .then(() => queryInterface.addIndex("faqs", ["question"]))
      .then(() => queryInterface.addIndex("faqs", ["sort"]))
      .then(() => queryInterface.addIndex("faqs", ["status"]))
      .then(() => queryInterface.addIndex("faqs", ["created_at"]))
      .then(() => queryInterface.addIndex("faqs", ["updated_at"]));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("faqs");
  },
};
