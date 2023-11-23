const express = require("express");
const { runValidation, validationRegister, validationLogin, validationGetUserById } = require("../validation/index.js");
const { loginUser, logoutUser, registerUser, getUserById } = require("../controllers/user.controller.js");
const { tryCatch } = require("../utils/try-catch.js");
const { checkToken } = require("../middleware/check-token.js");
const router = express.Router();

router.post("/login", validationLogin, runValidation, tryCatch(loginUser));
router.get("/logout", tryCatch(logoutUser));
router.post("/register", validationRegister, runValidation, tryCatch(registerUser));
router.get("/:id", checkToken, validationGetUserById, runValidation, tryCatch(getUserById));

module.exports = router;
