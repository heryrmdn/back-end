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

exports.createArticle = async (req, res, next) => {
  const doctorId = req.doctor.doctorId;
  const body = req.body;

  await Article.create({
    title: body.title,
    description: body.description,
    category: body.category,
    doctorId: doctorId,
  });

  return res.status(201).json({
    status: "success",
    code: 200,
    message: "Success create article",
  });
};

exports.updateArticle = async (req, res, next) => {
  const paramsId = parseInt(req.params.id);
  const doctorId = req.doctor.doctorId;
  const body = req.body;

  const article = await Article.findOne({
    where: {
      [Op.and]: [{ id: paramsId }, { doctorId: doctorId }],
    },
  });

  if (!article) {
    throwError("Data not found", 404, next);
  } else {
    await Article.update(
      {
        title: body.title,
        description: body.description,
        category: body.category,
      },
      {
        where: {
          [Op.and]: [{ id: paramsId }, { doctorId: doctorId }],
        },
      }
    );

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success update article",
    });
  }
};

exports.updateArticlePhoto = async (req, res, next) => {
  const doctorId = req.doctor.doctorId;
  const paramsId = parseInt(req.params.id);
  const file = req.file;

  if (!file) return throwError("Image is required", 404, next);

  const article = await Article.findOne({
    where: {
      [Op.and]: [{ id: paramsId }, { doctorId: doctorId }],
    },
  });

  if (!article) return throwError("Data not found", 404, next);

  const fileName = file.filename.split(" ").join("-");
  let finalImageURL = req.protocol + "://" + req.get("host") + "/public/uploads/" + fileName;

  await Article.update(
    {
      image: finalImageURL,
    },
    {
      where: {
        [Op.and]: [{ doctorId: doctorId }, {}],
      },
    }
  );

  return res.status(201).json({
    status: "success",
    code: 201,
    message: "Success update article photo",
  });
};

exports.deleteArticle = async (req, res, next) => {
  const paramsId = parseInt(req.params.id);
  const doctorId = req.doctor.doctorId;

  const article = await Article.findOne({
    where: {
      [Op.and]: [{ id: paramsId }, { doctorId: doctorId }],
    },
  });

  if (!article) {
    throwError("Data not found", 404, next);
  } else {
    await Article.destroy({
      where: {
        [Op.and]: [{ id: paramsId }, { doctorId: doctorId }],
      },
    });

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success delete article",
    });
  }
};
