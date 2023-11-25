const express = require("express");
const { tryCatch } = require("../../utils/try-catch");
const { createReservation, getReservationDetail } = require("../../controllers/api-controllers/reservation.controller");
const { authorization } = require("../../middleware/auth-middleware");
const router = express.Router();

router.post("/", authorization, tryCatch(createReservation));
router.get("/:id", authorization, tryCatch(getReservationDetail));

module.exports = router;
