"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Faq.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      sort: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Faq",
      tableName: "faqs",
    }
  );
  return Faq;
};
