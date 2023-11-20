const express = require("express");
const { tryCatch } = require("../utils/try-catch.js");
const { runValidation } = require("../validation/index.js");
const { validationRegister, validationLogin } = require("../validation/user.validation.js");
const { register, login } = require("../controllers/user.controller.js");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(register));
router.post("/login", validationLogin, runValidation, tryCatch(login));

module.exports = router;
