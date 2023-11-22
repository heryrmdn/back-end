const express = require("express");
const { tryCatch } = require("../utils/try-catch");
const { getAllArticle } = require("../controllers/article.controller");
const router = express.Router();

router.get("/", tryCatch(getAllArticle));

module.exports = router;
