const express = require("express");
const path = require("path");
const { sequelize } = require("./models");
const allRoutes = require("./routes");
const notFound = require("./middleware/not-found-middleware");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleware/error-handler-middleware");

const app = express();

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.use(cors());

// routers
app.use(allRoutes);

// error handler
app.use(notFound);
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

module.exports = app;
