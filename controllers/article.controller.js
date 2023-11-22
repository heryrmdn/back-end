const { Article } = require("../models");

exports.getAllArticle = async (req, res, next) => {
  const articles = await Article.findAll();

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Success Get All Article",
    data: articles,
  });
};
