const express = require("express");
const { getUserDetail } = require("../../controllers/api-controllers/user.controller");
const { tryCatch } = require("../../utils/try-catch");
const router = express.Router();

router.get("/:id", tryCatch(getUserDetail));

module.exports = router;
