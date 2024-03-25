"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reference.init(
    {
      slug: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.INTEGER,
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
      modelName: "Reference",
      tableName: "references",
    }
  );
  return Reference;
};
