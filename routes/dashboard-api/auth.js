const express = require("express");
const { login, register } = require("../../controllers/dashboard-api-controllers/auth.controller");
const { tryCatch } = require("../../utils/try-catch");
const router = express.Router();

router.post("/login", tryCatch(login));
router.post("/register", register);

module.exports = router;
