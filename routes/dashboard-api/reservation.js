const express = require("express");
const { getReservationList, getReservationDetail, UpdateReservation } = require("../../controllers/dashboard-api-controllers/reservation.controller");
const { tryCatch } = require("../../utils/try-catch");
const { authorization } = require("../../middleware/auth-doctor-middleware");
const router = express.Router();

router.get("/", authorization, tryCatch(getReservationList));
router.get("/:id", authorization, tryCatch(getReservationDetail));
router.put("/:id", authorization, tryCatch(UpdateReservation));

module.exports = router;
