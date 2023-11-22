const express = require("express");
const { createBook, editBook, getBookById } = require("../controllers/book.controller");
const { tryCatch } = require("../utils/try-catch");
const { checkAuth } = require("../middleware/check-auth");
const { validationCreateBook, runValidation } = require("../validation");
const router = express.Router();

router.post("/", checkAuth, tryCatch(createBook));
router.put("/", checkAuth, tryCatch(editBook));
router.get("/:id", checkAuth, validationCreateBook, runValidation, tryCatch(getBookById));

module.exports = router;
