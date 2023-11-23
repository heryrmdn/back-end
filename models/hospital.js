"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hospital.hasMany(models.Doctor, {
        foreignKey: "hospitalId",
        as: "hospital",
      });
    }
  }
  Hospital.init(
    {
      name: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hospital",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Hospital;
};
