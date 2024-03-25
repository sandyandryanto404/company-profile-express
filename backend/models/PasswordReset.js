"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PasswordReset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PasswordReset.init(
    {
      email: DataTypes.STRING,
      token: DataTypes.STRING,
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "PasswordReset",
      tableName: "password_reset",
    }
  );
  return PasswordReset;
};
