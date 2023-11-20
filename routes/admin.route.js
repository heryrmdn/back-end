const express = require("express");
const { register, login } = require("../controllers/admin.controller");
const { runValidation } = require("../validation");
const { validationRegister } = require("../validation/auth.validation");
const { tryCatch } = require("../utils");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(register));
router.post("/login", validationRegister, runValidation, tryCatch(login));

module.exports = router;
