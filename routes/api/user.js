const express = require("express");
const { getUserDetail } = require("../../controllers/api-controllers/user.controller");
const { tryCatch } = require("../../utils/try-catch");
const { getSession } = require("../../middleware/sessions-handler");
const router = express.Router();

router.get("/:id", getSession, tryCatch(getUserDetail));

module.exports = router;
