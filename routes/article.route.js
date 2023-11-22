const express = require("express");
const { tryCatch } = require("../utils/try-catch");
const { getAllArticle, getArticleById } = require("../controllers/article.controller");
const router = express.Router();

router.get("/", tryCatch(getAllArticle));
router.get("/:id", tryCatch(getArticleById));

module.exports = router;
