const express = require("express");
const { createBook, editBook, getBookById } = require("../controllers/book.controller");
const { tryCatch } = require("../utils/try-catch");

const { validationCreateBook, runValidation } = require("../validation");
const router = express.Router();

router.post("/", tryCatch(createBook));
router.put("/", tryCatch(editBook));
router.get("/:id", validationCreateBook, runValidation, tryCatch(getBookById));

module.exports = router;
