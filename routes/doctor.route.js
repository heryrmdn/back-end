const express = require("express");
const { getAllDoctor, getDoctorById } = require("../controllers/doctor.controller");
const { tryCatch } = require("../utils/try-catch");
const router = express.Router();

router.get("/", tryCatch(getAllDoctor));
router.get("/:id", tryCatch(getDoctorById));

module.exports = router;
