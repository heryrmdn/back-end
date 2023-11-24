const express = require("express");
const { sequelize } = require("./models");
const { throwError } = require("./utils/throw-error");
const routes = require("./routes");
const errorHandler = require("./middleware/error-handler");
const cookieParser = require("cookie-parser");

const app = express();

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/", routes);
app.all("*", (req, res, next) => throwError(`Can't find ${req.originalUrl} on the server!`, 404, next));

// global error handler
app.use(errorHandler);

// server 
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
