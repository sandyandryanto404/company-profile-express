"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ArticleComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArticleComment.init(
    {
      parent_id: DataTypes.INTEGER,
      artiucle_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      comment: DataTypes.STRING,
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
      modelName: "ArticleComment",
      tableName: "auth_roles",
    }
  );
  return ArticleComment;
};
