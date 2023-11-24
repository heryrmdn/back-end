const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const dashboardApiRouter = require("./dashboard-api");

router.use("/api", apiRouter);
router.use("/dashboard-api", dashboardApiRouter);

module.exports = router;
