"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("article_references", {
        article_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED,
        },
        reference_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED,
        },
      })
      .then(() =>
        queryInterface.addConstraint("article_references", {
          type: "FOREIGN KEY",
          fields: ["article_id"],
          references: {
            table: "articles",
            field: "id",
          },
          onDelete: "no action",
          onUpdate: "no action",
        })
      )
      .then(() =>
        queryInterface.addConstraint("article_references", {
          type: "FOREIGN KEY",
          fields: ["reference_id"],
          references: {
            table: "references",
            field: "id",
          },
          onDelete: "no action",
          onUpdate: "no action",
        })
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("article_references");
  },
};