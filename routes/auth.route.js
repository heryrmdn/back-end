const express = require("express");
const { register } = require("../controllers/auth.controller");
const { tryCatch } = require("../utils/tryCatch");
const router = express.Router();

router.post("/register", tryCatch(register));

module.exports = router;
