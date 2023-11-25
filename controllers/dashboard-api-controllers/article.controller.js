const { Op } = require("sequelize");
const { Article, Doctor, Specialist } = require("../../models");
const { throwError } = require("../../utils/throw-error");

exports.getArticleList = async (req, res, next) => {
  const doctorId = req.doctor.doctorId;

  const articles = await Article.findAll({
    attributes: ["id", "title", "image", "category", "createdAt", "updatedAt"],
    include: {
      model: Doctor,
      as: "doctor",
      attributes: ["name", "image", "hospital"],
      include: {
        model: Specialist,
        as: "specialist",
        attributes: ["name"],
      },
    },
    where: {
      doctorId: doctorId,
    },
  });

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Success get article list",
    articles,
  });
};

exports.getArticleDetail = async (req, res, next) => {
  const paramsId = parseInt(req.params.id);
  const doctorId = req.doctor.doctorId;

  const article = await Article.findOne({
    include: {
      model: Doctor,
      as: "doctor",
      attributes: ["name", "image", "hospital"],
      include: {
        model: Specialist,
        as: "specialist",
        attributes: ["name"],
      },
    },
    where: {
      [Op.and]: [{ doctorId: doctorId }, { id: paramsId }],
    },
  });

  if (!article) {
    throwError("Data not found", 404, next);
  } else {
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success get article list",
      article,
    });
  }
};

exports.createArticle = (req, res, next) => {
  res.send("createArticle /dashboard-api/articles");
};

exports.updateArticle = (req, res, next) => {
  const params = req.params;

  res.send(`updateArticle /dashboard-api/articles/${params.id}`);
};

exports.deleteArticle = (req, res, next) => {
  const params = req.params;

  res.send(`deleteArticle /dashboard-api/articles/${params.id}`);
};
