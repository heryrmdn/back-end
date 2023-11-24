const { Article } = require("../../models");
const { throwError } = require("../../utils/throw-error");

exports.getArticleList = async (req, res, next) => {
  const articles = await Article.findAll();

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Success get article list",
    articles,
  });
};

exports.getArticleDetail = async (req, res, next) => {
  const paramsId = parseInt(req.params.id);

  const article = await Article.findOne({
    where: {
      id: paramsId,
    },
  });

  if (!article) {
    throwError("Data not found", 404, next);
  } else {
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success get article detail",
      article,
    });
  }
};
