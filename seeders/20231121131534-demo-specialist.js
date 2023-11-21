"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Specialist",
      [
        { id: "S0001", name: "Surgeon" },
        { id: "S0002", name: "Pediatrician" },
        { id: "S0003", name: "Dentist" },
        { id: "S0004", name: "Ophthalmologist" },
        { id: "S0005", name: "Cardiologist" },
        { id: "S0006", name: "Dermatologist" },
        { id: "S0007", name: "Neurologist" },
        { id: "S0008", name: "ENT Specialist (Ear, Nose, Throat)" },
        { id: "S0009", name: "Psychiatrist" },
        { id: "S0010", name: "Obstetrician and Gynecologist" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Specialist", null, {});
  },
};
