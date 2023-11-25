"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Reservation",
      [
        {
          customerId: "12",
          doctorId: "173",
          date: "2023-11-27",
          time: "14:00:00",
          packageId: "P0001",
          createdAt: "2023-11-26",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reservation", null, {});
  },
};
