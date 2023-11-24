const express = require("express");
const { tryCatch } = require("../../utils/try-catch");
const { createReservation, getReservationDetail } = require("../../controllers/api-controllers/reservation.controller");
const router = express.Router();

router.post("/", tryCatch(createReservation));
router.get("/:id", tryCatch(getReservationDetail));

module.exports = router;
