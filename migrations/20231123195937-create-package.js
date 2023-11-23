"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Package", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      duration: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: "00:30:00",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Package");
  },
};
