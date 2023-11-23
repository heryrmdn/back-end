const express = require("express");
const { runValidation, validationRegister, validationLogin } = require("../validation/index.js");
const { registerUser, getUserById, } = require("../controllers/user.controller.js");
const { tryCatch } = require("../utils/try-catch.js");
const { checkAuth } = require("../middleware/check-auth.js");
const { checkRole } = require("../middleware/check-user.js");
const { login, logout } = require("../controllers/auth.controller.js");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(registerUser));
router.post("/login", validationLogin, runValidation, tryCatch(login));
router.get("/logout", tryCatch(logout));
router.get("/:id", checkAuth, checkRole, tryCatch(getUserById));

module.exports = router;
