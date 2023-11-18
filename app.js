const express = require("express");
const app = express();
const { sequelize } = require("./models");

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
