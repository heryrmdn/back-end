"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      userId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
      time: DataTypes.TIME,
      packageId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Book",
      freezeTableName: true,
    }
  );
  return Book;
};
