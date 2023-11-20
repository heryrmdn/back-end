const express = require("express");
const { tryCatch } = require("../utils/try-catch.js");
const { runValidation } = require("../validation/index.js");
const { validationRegister } = require("../validation/user.validation.js");
const { register } = require("../controllers/user.controller.js");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(register));

module.exports = router;
