const express = require("express");
const { runValidation, validationRegister, validationLogin } = require("../validation/index.js");
const { registerUser, loginUser, getUserById, logoutUser } = require("../controllers/user.controller.js");
const { tryCatch } = require("../utils/try-catch.js");
const { checkAuth } = require("../middleware/check-auth.js");
const router = express.Router();

router.post("/register", validationRegister, runValidation, tryCatch(registerUser));
router.post("/login", validationLogin, runValidation, tryCatch(loginUser));
router.get("/logout", tryCatch(logoutUser));
router.get("/:id", checkAuth, tryCatch(getUserById));

module.exports = router;
