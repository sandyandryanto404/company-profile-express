"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: {
        field: "first_names",
        type: DataTypes.STRING,
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING,
      },
      gender: DataTypes.STRING,
      country: DataTypes.STRING,
      province: DataTypes.STRING,
      regency: DataTypes.STRING,
      postalCode: {
        field: "postal_code",
        type: DataTypes.STRING,
      },
      birthPlace: {
        field: "birth_place",
        type: DataTypes.STRING,
      },
      birthDate: {
        field: "birth_date",
        type: DataTypes.DATE,
      },
      facebook: DataTypes.STRING,
      instagram: DataTypes.STRING,
      twitter: DataTypes.STRING,
      address: DataTypes.STRING,
      aboutMe: {
        field: "about_me",
        type: DataTypes.DATE,
      },
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
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
