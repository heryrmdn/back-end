const express = require("express");
const { runValidation, validationRegister, validationLogin } = require("../validation");
const { registerAdmin } = require("../controllers/admin.controller");
const { tryCatch } = require("../utils/try-catch");
const { checkAuth } = require("../middleware/check-auth");
const { login, logout } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(registerAdmin));
router.post("/login", validationLogin, runValidation, tryCatch(login));
router.get("/logout", tryCatch(logout));

module.exports = router;
