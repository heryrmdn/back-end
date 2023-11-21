"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Package.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.BIGINT,
      duration: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Package",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Package;
};
