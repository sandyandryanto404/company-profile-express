"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserNotification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserNotification.init(
    {
      userId: {
        field: "user_id",
        type: DataTypes.INTEGER,
      },
      subject: DataTypes.STRING,
      description: DataTypes.STRING,
      content: DataTypes.STRING,
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
      modelName: "UserNotification",
      tableName: "users_notifications",
    }
  );
  return UserNotification;
};
