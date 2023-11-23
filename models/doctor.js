"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctor.belongsTo(models.Hospital, {
        foreignKey: "hospitalId",
        as: "hospital",
      });
      Doctor.belongsTo(models.Specialist, {
        foreignKey: "specialistId",
        as: "specialist",
      });
    }
  }
  Doctor.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      hospitalId: DataTypes.STRING,
      specialistId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Doctor",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Doctor;
};
