"use strict";

const brcypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let customers = [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "johnDoe123",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "janeSmith456",
      },
      {
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        password: "bobJohnson789",
      },
      {
        name: "Alice Williams",
        email: "alice.williams@example.com",
        password: "aliceWilliams101",
      },
      {
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        password: "charlieBrown2022",
      },
      {
        name: "Eva Davis",
        email: "eva.davis@example.com",
        password: "evaDavis303",
      },
      {
        name: "Frank Miller",
        email: "frank.miller@example.com",
        password: "frankMiller404",
      },
      {
        name: "Grace Taylor",
        email: "grace.taylor@example.com",
        password: "graceTaylor505",
      },
      {
        name: "Henry Wilson",
        email: "henry.wilson@example.com",
        password: "henryWilson606",
      },
      {
        name: "Ivy Moore",
        email: "ivy.moore@example.com",
        password: "ivyMoore707",
      },
    ];

    const saltRounds = 10;

    const hashedCustomers = customers.map((customer) => {
      const hashedPassword = brcypt.hashSync(customer.password, saltRounds);
      return {
        ...customer,
        password: hashedPassword,
      };
    });

    await queryInterface.bulkInsert("Customer", hashedCustomers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Customer", null, {});
  },
};
