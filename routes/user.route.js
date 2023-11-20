const express = require("express");
const { runValidation } = require("../validation/index.js");
const { validationRegister, validationLogin } = require("../validation/auth.validation.js");
const { tryCatch } = require("../utils/index.js");
const { registerUser, loginUser } = require("../controllers/user.controller.js");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(registerUser));
router.post("/login", validationLogin, runValidation, tryCatch(loginUser));

module.exports = router;
