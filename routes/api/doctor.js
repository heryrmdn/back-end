const express = require("express");
const { getDoctorList, getDoctorDetail } = require("../../controllers/api-controllers/doctor.controller");
const { tryCatch } = require("../../utils/try-catch");
const router = express.Router();

router.get("/", tryCatch(getDoctorList));
router.get("/:id", tryCatch(getDoctorDetail));

module.exports = router;
