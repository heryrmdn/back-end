const express = require("express");
const { runValidation } = require("../validation/index.js");
const { register, login } = require("../controllers/user.controller.js");
const { validationRegister, validationLogin } = require("../validation/auth.validation.js");
const { tryCatch } = require("../utils/index.js");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(register));
router.post("/login", validationLogin, runValidation, tryCatch(login));

module.exports = router;
