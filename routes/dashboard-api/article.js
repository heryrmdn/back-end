const express = require("express");
const {
  getArticleList,
  getArticleDetail,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../../controllers/dashboard-api-controllers/article.controller");
const { tryCatch } = require("../../utils/try-catch");
const router = express.Router();

router.get("/", tryCatch(getArticleList));
router.get("/:id", tryCatch(getArticleDetail));
router.post("/", tryCatch(createArticle));
router.put("/:id", tryCatch(updateArticle));
router.delete("/:id", tryCatch(deleteArticle));

module.exports = router;
