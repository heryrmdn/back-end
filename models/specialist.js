"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Specialist.hasMany(models.Doctor, {
        foreignKey: "specialistId",
        as: "specialist",
      });
    }
  }
  Specialist.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specialist",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Specialist;
};
