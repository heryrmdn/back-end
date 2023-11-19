"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Book", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      doctor_id: {
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
      package_id: {
        type: Sequelize.STRING,
        references: {
          model: "Package",
          key: "id",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Book");
  },
};
