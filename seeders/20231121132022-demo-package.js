"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Package",
      [
        {
          id: "P0001",
          name: "Messaging",
          price: "20",
          duration: "00:30:00",
        },
        {
          id: "P0002",
          name: "Video Call",
          price: "20",
          duration: "00:30:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Package", null, {});
  },
};
