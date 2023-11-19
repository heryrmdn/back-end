"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Customer",
      [
        {
          name: "Ms. Andrew Kohler",
          email: "Elenora.Gusikowski@hotmail.com",
          password: "0IxLRt0s1pYsoy1",
          phone_number: "089600353355",
          sex: "Perempuan",
        },
        {
          name: "Manuel Medhurst",
          email: "Harry.Schaefer@gmail.com",
          password: "hQE_Q5hhALIO2ZX",
          phone_number: "0896003533532",
          sex: "Laki-laki",
        },
        {
          name: "Mr. Essie Hintz",
          email: "Lucinda_Kihn21@yahoo.com",
          password: "1TaP2_VMFjAGlxd",
          phone_number: "089600353378",
          sex: "Laki-laki",
        },
        {
          name: "Angel Reilly",
          email: "Darby_Roberts15@gmail.com",
          password: "sP0ZBT9fvH3rL0u",
          phone_number: "089600353390",
          sex: "Perempuan",
        },
        {
          name: "Aaron Carroll",
          email: "Trace.Ledner@yahoo.com",
          password: "CydQ32OulEhzSNo",
          phone_number: "08960035370",
          sex: "Laki-laki",
        },
        {
          name: "Sally Runolfsson",
          email: "Garry.Satterfield34@hotmail.com",
          password: "qnlYWZk9k6t4Kta",
          phone_number: "089600353370",
          sex: "Laki-laki",
        },
        {
          name: "Gustavo Turcotte",
          email: "Giovanni.Kirlin48@yahoo.com",
          password: "SM0g_qIybotYvOg",
          phone_number: "089600353366",
          sex: "Laki-laki",
        },
        {
          name: "Bryant Ernser",
          email: "Arvilla.Kuhic30@hotmail.com",
          password: "OPElzasea87QUK6",
          phone_number: "0896003533445",
          sex: "Laki-laki",
        },
        {
          name: "Clay Abernathy",
          email: "Reid65@gmail.com",
          password: "vOHFEk_UylcNM6x",
          phone_number: "089600353322",
          sex: "Perempuan",
        },
        {
          name: "Tammy VonRueden",
          email: "Mitchell.Anderson@yahoo.com",
          password: "AxE85x8zvIEe5b1",
          phone_number: "089600353399",
          sex: "Laki-laki",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Customer", null, {});
  },
};
