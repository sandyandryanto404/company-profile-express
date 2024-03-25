"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Slider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Slider.init(
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      link: DataTypes.STRING,
      status: DataTypes.INTEGER,
      sort: DataTypes.INTEGER,
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
      modelName: "Slider",
      tableName: "sliders",
    }
  );
  return Slider;
};
