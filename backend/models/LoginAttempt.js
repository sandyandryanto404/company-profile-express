"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LoginAttempt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LoginAttempt.init(
    {
      ipAddress: {
        field: "ip_address",
        type: DataTypes.STRING,
      },
      login: DataTypes.STRING,
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
      modelName: "LoginAttempt",
      tableName: "login_attemps",
    }
  );
  return LoginAttempt;
};
