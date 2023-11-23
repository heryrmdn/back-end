"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Reservation, {
        foreignKey: "customerId",
      });
    }
  }
  Customer.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      sex: {
        type: DataTypes.ENUM,
        values: ["Laki-laki", "Perempuan"],
      },
    },
    {
      sequelize,
      modelName: "Customer",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Customer;
};
