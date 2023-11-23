"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.Customer, {
        foreignKey: "customerId",
      });
      Reservation.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
      });
      Reservation.belongsTo(models.Package, {
        foreignKey: "packageId",
      });
    }
  }
  Reservation.init(
    {
      customerId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
      date: DataTypes.DATEONLY,
      time: DataTypes.TIME,
      packageId: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: ["Pending", "Approved", "Rejected"],
      },
    },
    {
      sequelize,
      modelName: "Reservation",
      freezeTableName: true,
    }
  );
  return Reservation;
};
