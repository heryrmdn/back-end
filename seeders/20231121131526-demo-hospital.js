"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Hospital",
      [
        {
          id: "H0001",
          name: "Pollich - Davis Hospital",
          city: "Alexandria",
        },
        {
          id: "H0002",
          name: "Fadel and Sons Hospital",
          city: "East Mitchel",
        },
        {
          id: "H0003",
          name: "Mante and Sons Hospital",
          city: "Yostfurt",
        },
        {
          id: "H0004",
          name: "Waters, Kozey and Howe Hospital",
          city: "Jaquanview",
        },
        {
          id: "H0005",
          name: "Legros, Wintheiser and Moore Hospital",
          city: "New Milan",
        },
        {
          id: "H0006",
          name: "Hegmann, Welch and Bechtelar Hospital",
          city: "Robelport",
        },
        {
          id: "H0007",
          name: "Schmeler Inc Hospital",
          city: "Broken Arrow",
        },
        {
          id: "H0008",
          name: "Schaefer - Larson Hospital",
          city: "Galveston",
        },
        {
          id: "H0009",
          name: "Auer LLC Hospital",
          city: "North Carmel",
        },
        {
          id: "H0010",
          name: "Mayert Group Hospital",
          city: "Hoppefort",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Hospital", null, {});
  },
};
