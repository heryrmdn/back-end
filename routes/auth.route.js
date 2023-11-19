const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const { tryCatch } = require("../utils/tryCatch");
const { registerValidation } = require("../middleware/auth.js");
const router = express.Router();

router.post("/register", registerValidation, tryCatch(register));
router.post("/login", tryCatch(login));

module.exports = router;
