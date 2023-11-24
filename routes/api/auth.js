const express = require("express");
const { login, register } = require("../../controllers/api-controllers/auth.controller");
const { tryCatch } = require("../../utils/try-catch");
const { validationRegister, runValidation, validationLogin } = require("../../validation");
const router = express.Router();

router.post("/login", validationLogin, runValidation, tryCatch(login));
router.post("/register", validationRegister, runValidation, tryCatch(register));

module.exports = router;
