const express = require("express");
const { sequelize } = require("./models");
const allRoutes = require("./routes");
const errorHandler = require("./middleware/error.handler");
const routeHandler = require("./middleware/route.handler");

const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api", allRoutes);
app.all("*", routeHandler);
app.use(errorHandler);

// server
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
