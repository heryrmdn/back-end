const express = require("express");
const { sequelize } = require("./models");
const allRoutes = require("./routes");
const errorHandler = require("./middleware/error.handler");
const { handleErrors } = require("./utils");

const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api", allRoutes);
app.all("*", (req, res, next) => handleErrors(`Can't find ${req.originalUrl} on the server!`, 404, next));

// global error handler
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
