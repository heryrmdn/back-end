const express = require("express");
const { tryCatch } = require("../../utils/try-catch");
const { createReservation, getReservationDetail, getReservationList } = require("../../controllers/api-controllers/reservation.controller");
const { authorization } = require("../../middleware/auth-middleware");
const { validationCreateReservation, runValidation } = require("../../validation");
const router = express.Router();

router.post("/", authorization, validationCreateReservation, runValidation, tryCatch(createReservation));
router.get("/", authorization, tryCatch(getReservationList));
router.get("/:id", authorization, tryCatch(getReservationDetail));

module.exports = router;
