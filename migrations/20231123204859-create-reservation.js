"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reservation", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Customer",
          key: "id",
        },
      },
      doctorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctor",
          key: "id",
        },
      },
      date: {
        type: Sequelize.DATEONLY,
      },
      time: {
        type: Sequelize.TIME,
      },
      packageId: {
        type: Sequelize.STRING,
        references: {
          model: "Package",
          key: "id",
        },
      },
      status: {
        type: Sequelize.ENUM,
        values: ["Pending", "Approved", "Rejected"],
        allowNull: false,
        defaultValue: "Pending",
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Reservation");
  },
};
