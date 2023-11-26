const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const dashboardApiRouter = require("./dashboard-api");

router.get("/", (req, res) => {
  res.send("Welcome to Klinik Heula API");
});

router.use("/api", apiRouter);
router.use("/dashboard-api", dashboardApiRouter);

module.exports = router;
