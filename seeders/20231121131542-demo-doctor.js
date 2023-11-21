"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Doctor",
      [
        {
          name: "dr. Jake Gusikowski",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/180.jpg",
          rating: "5",
          hospital_id: "H0001",
          specialist_id: "S0001",
        },
        {
          name: "dr. Winston Klein",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/716.jpg",
          rating: "4",
          hospital_id: "H0001",
          specialist_id: "S0005",
        },
        {
          name: "dr. Audrey Rohan",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/940.jpg",
          rating: "5",
          hospital_id: "H0001",
          specialist_id: "S0004",
        },
        {
          name: "dr. Timmy Goodwin",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/620.jpg",
          rating: "5",
          hospital_id: "H0003",
          specialist_id: "S0003",
        },
        {
          name: "dr. Ivan Kovacek",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1017.jpg",
          rating: "4",
          hospital_id: "H0003",
          specialist_id: "S0002",
        },
        {
          name: "dr. Joey Champlin",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/234.jpg",
          rating: "4",
          hospital_id: "H0005",
          specialist_id: "S0007",
        },
        {
          name: "dr. Louise Ritchie",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/737.jpg",
          rating: "5",
          hospital_id: "H0004",
          specialist_id: "S0005",
        },
        {
          name: "dr. Winston Bashirian",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/765.jpg",
          rating: "4",
          hospital_id: "H0007",
          specialist_id: "S0010",
        },
        {
          name: "dr. Cristina Sipes",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/495.jpg",
          rating: "4",
          hospital_id: "H0010",
          specialist_id: "S0003",
        },
        {
          name: "dr. Gertrude Parisian",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/558.jpg",
          rating: "5",
          hospital_id: "H0005",
          specialist_id: "S0010",
        },
        {
          name: "dr. Meghan Sipes",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/613.jpg",
          rating: "4",
          hospital_id: "H0009",
          specialist_id: "S0007",
        },
        {
          name: "dr. Katie Morar",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/848.jpg",
          rating: "5",
          hospital_id: "H0009",
          specialist_id: "S0007",
        },
        {
          name: "dr. Jordan McCullough",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/975.jpg",
          rating: "5",
          hospital_id: "H0003",
          specialist_id: "S0010",
        },
        {
          name: "dr. Aaron Bruen",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1036.jpg",
          rating: "4",
          hospital_id: "H0003",
          specialist_id: "S0009",
        },
        {
          name: "dr. Glen Conn",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/669.jpg",
          rating: "5",
          hospital_id: "H0002",
          specialist_id: "S0005",
        },
        {
          name: "dr. Joann Larson",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/353.jpg",
          rating: "5",
          hospital_id: "H0002",
          specialist_id: "S0003",
        },
        {
          name: "dr. Michael Mohr",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/583.jpg",
          rating: "4",
          hospital_id: "H0002",
          specialist_id: "S0003",
        },
        {
          name: "dr. Dawn Windler",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg",
          rating: "5",
          hospital_id: "H0001",
          specialist_id: "S0002",
        },
        {
          name: "dr. Kathy Larson",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/330.jpg",
          rating: "4",
          hospital_id: "H0010",
          specialist_id: "S0002",
        },
        {
          name: "dr. Glenn Rath",
          image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/490.jpg",
          rating: "4",
          hospital_id: "H0006",
          specialist_id: "S0002",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Doctor", null, {});
  },
};
