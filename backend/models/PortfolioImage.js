"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PortfolioImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PortfolioImage.init(
    {
      portfolioId: {
        field: "portfolio_id",
        type: DataTypes.INTEGER,
      },
      image: DataTypes.STRING,
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
      modelName: "PortfolioImage",
      tableName: "portfolios_images",
    }
  );
  return PortfolioImage;
};
