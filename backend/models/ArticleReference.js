"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleReference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArticleReference.init(
    {
      article_id: DataTypes.INTEGER,
      reference_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ArticleReference",
      tableName: "article_references",
    }
  );
  return ArticleReference;
};
