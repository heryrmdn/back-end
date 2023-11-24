const express = require("express");
const { getReservationList, getReservationDetail, UpdateReservation } = require("../../controllers/dashboard-api-controllers/reservation.controller");
const { tryCatch } = require("../../utils/try-catch");
const router = express.Router();

router.get("/", tryCatch(getReservationList));
router.get("/:id", tryCatch(getReservationDetail));
router.put("/:id", tryCatch(UpdateReservation));

module.exports = router;
