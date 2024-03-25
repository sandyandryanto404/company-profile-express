"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Team.init(
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      position_name: DataTypes.STRING,
      twitter: DataTypes.STRING,
      instagram: DataTypes.STRING,
      facebook: DataTypes.STRING,
      linkedIn: {
        field: "linked_in",
        type: DataTypes.STRING,
      },
      address: DataTypes.STRING,
      sort: DataTypes.INTEGER,
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
      modelName: "Team",
      tableName: "teams",
    }
  );
  return Team;
};
