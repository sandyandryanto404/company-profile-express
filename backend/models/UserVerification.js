"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserVerification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserVerification.init(
    {
      userId: {
        field: "user_id",
        type: DataTypes.INTEGER,
      },
      token: DataTypes.STRING,
      status: DataTypes.INTEGER,
      expiredAt: {
        field: "expired_at",
        type: DataTypes.DATE,
      },
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
      modelName: "UserVerification",
      tableName: "users_verifications",
    }
  );
  return UserVerification;
};
