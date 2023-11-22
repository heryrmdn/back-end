const express = require("express");
const { getAllDoctor } = require("../controllers/doctor.controller");
const { tryCatch } = require("../utils/try-catch");
const router = express.Router();

router.get("/", tryCatch(getAllDoctor));

module.exports = router;
