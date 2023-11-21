const express = require("express");
const { runValidation, validationRegister, validationLogin } = require("../validation");
const { registerAdmin, loginAdmin, logoutAdmin, getAdminById } = require("../controllers/admin.controller");
const { tryCatch } = require("../utils/try-catch");
const { checkAuth } = require("../middleware/check-auth");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(registerAdmin));
router.post("/login", validationLogin, runValidation, tryCatch(loginAdmin));
router.get("/logout", tryCatch(logoutAdmin));
router.get("/:id", checkAuth, tryCatch(getAdminById));

module.exports = router;
