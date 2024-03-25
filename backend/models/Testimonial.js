"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Testimonial.init(
    {
      customerId: {
        field: "customer_id",
        type: DataTypes.INTEGER,
      },
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      position: DataTypes.STRING,
      quote: DataTypes.STRING,
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
      modelName: "Testimonial",
      tableName: "testimonials",
    }
  );
  return Testimonial;
};
