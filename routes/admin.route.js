const express = require("express");
const { runValidation, validationRegister, validationLogin } = require("../validation");
const { registerAdmin, loginAdmin } = require("../controllers/admin.controller");
const { tryCatch } = require("../utils/try-catch");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(registerAdmin));
router.post("/login", validationLogin, runValidation, tryCatch(loginAdmin));

module.exports = router;
