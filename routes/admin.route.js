const express = require("express");
const { runValidation } = require("../validation");
const { validationRegister, validationLogin } = require("../validation/auth.validation");
const { tryCatch } = require("../utils");
const { registerAdmin, loginAdmin } = require("../controllers/admin.controller");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(registerAdmin));
router.post("/login", validationLogin, runValidation, tryCatch(loginAdmin));

module.exports = router;
