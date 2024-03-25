"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable("articles", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT.UNSIGNED,
        },
        user_id: {
          type: Sequelize.BIGINT.UNSIGNED,
        },
        image: {
          type: Sequelize.STRING(191),
          allowNull: true,
        },
        title: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        slug: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT("long"),
          allowNull: true,
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
      .then(() => queryInterface.addIndex("articles", ["user_id"]))
      .then(() => queryInterface.addIndex("articles", ["image"]))
      .then(() => queryInterface.addIndex("articles", ["title"]))
      .then(() => queryInterface.addIndex("articles", ["slug"]))
      .then(() => queryInterface.addIndex("articles", ["description"]))
      .then(() => queryInterface.addIndex("articles", ["status"]))
      .then(() => queryInterface.addIndex("articles", ["created_at"]))
      .then(() => queryInterface.addIndex("articles", ["updated_at"]))
      .then(() =>
        queryInterface.addConstraint("articles", {
          type: "FOREIGN KEY",
          fields: ["user_id"],
          references: {
            table: "users",
            field: "id",
          },
          onDelete: "no action",
          onUpdate: "no action",
        })
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("articles");
  },
};
