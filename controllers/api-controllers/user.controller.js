const { Customer } = require("../../models");

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

// exports.updateUserPhoto = async (req, res, next) => {
//   const paramsId = parseInt(req.params.id);

//   const file = req.file;
//   const fileName = file.fileName;
//   const pathFile = `${req.protocol}://${req.get("host")}/public/uploads/${fileName}`;

//   await Customer.update({
//     image: pathFile,
//   });

//   res.send(`updateUser /api/users/${paramsId}`);
// };
