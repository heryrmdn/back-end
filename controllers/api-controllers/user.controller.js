const { Customer } = require("../../models");
const { throwError } = require("../../utils/throw-error");

exports.getUserDetail = async (req, res, next) => {
  const userId = req.user.userId;

  const user = await Customer.findOne({
    attributes: ["id", "name", "image", "email", "phoneNumber", "sex"],
    where: {
      id: userId,
    },
  });

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Success get user detail",
    user,
  });
};

exports.updateUser = async (req, res, next) => {
  const userId = req.user.userId;
  const body = req.body;

  await Customer.update(
    {
      name: body.name,
      phoneNumber: body.name,
      sex: body.sex,
    },
    {
      where: {
        id: userId,
      },
    }
  );

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Success update user",
  });
};

exports.updateUserPhoto = async (req, res, next) => {
  const userId = req.user.userId;
  const file = req.file;

  if (!file) {
    throwError("Image is required", 404, next);
  } else {
    const fileName = file.filename.split(" ").join("-");
    let finalImageURL = req.protocol + "://" + req.get("host") + "/public/uploads/" + fileName;

    await Customer.update(
      {
        image: finalImageURL,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "Success update user photo",
    });
  }
};
