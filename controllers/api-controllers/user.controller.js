const { Op } = require("sequelize");
const { Customer } = require("../../models");
const { throwError } = require("../../utils/throw-error");

exports.getUserDetail = async (req, res, next) => {
  const paramsId = parseInt(req.params.id);
  const userId = req.userSession.userId;

  const user = await Customer.findOne({
    attributes: ["id", "name", "image", "email", "phoneNumber", "sex"],
    where: {
      [Op.and]: [{ id: paramsId }, { id: userId }],
    },
  });

  if (!user) {
    throwError("Data not found", 404, next);
  } else {
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success get user detail",
      user,
    });
  }
};
