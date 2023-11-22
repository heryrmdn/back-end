const { Article } = require("../models");
const { throwError } = require("../utils/throw-error");

exports.getAllArticle = async (req, res, next) => {
  const articles = await Article.findAll();

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Success Get All Articles",
    data: articles,
  });
};

exports.getArticleById = async (req, res, next) => {
  const payload = req.params;

  const article = await Article.findOne({
    where: { id: payload.id },
  });

  if (!article) {
    return throwError("Data not found", 404, next);
  }

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Success Get Article by id",
    data: article,
  });
};
