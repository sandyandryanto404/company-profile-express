"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserRole.init(
    {
      userId: {
        field: "user_id",
        type: DataTypes.INTEGER,
      },
      roleId: {
        field: "role_id",
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "UserRole",
      tableName: "users_roles",
    }
  );
  return UserRole;
};
