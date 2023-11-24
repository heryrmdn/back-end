const express = require("express");
const { login, register } = require("../../controllers/api-controllers/auth.controller");
const { tryCatch } = require("../../utils/try-catch");
const router = express.Router();

router.post("/login", tryCatch(login));
router.post("/register", tryCatch(register));

module.exports = router;
