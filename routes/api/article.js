const express = require("express");
const { getArticleList, getArticleDetail } = require("../../controllers/api-controllers/article.controller");
const { tryCatch } = require("../../utils/try-catch");
const router = express.Router();

router.get("/", tryCatch(getArticleList));
router.get("/:id", tryCatch(getArticleDetail));

module.exports = router;
