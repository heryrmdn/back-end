const { Doctor, Specialist } = require("../../models");
const { throwError } = require("../../utils/throw-error");

exports.getUserDetail = async (req, res, next) => {
  const doctorId = req.doctor.doctorId;

  const user = await Doctor.findOne({
    attributes: ["id", "name", "image", "email", "rating", "hospital", "biography"],
    include: {
      model: Specialist,
      as: "specialist",
      attributes: ["name"],
    },
    where: {
      id: doctorId,
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
  const doctorId = req.doctor.doctorId;
  const body = req.body;

  await Doctor.update(
    {
      name: body.name,
      hospital: body.hospital,
      biography: body.biography,
    },
    {
      where: {
        id: doctorId,
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
  const doctorId = req.doctor.doctorId;
  const file = req.file;

  if (!file) {
    throwError("Image is required", 404, next);
  } else {
    const fileName = file.filename.split(" ").join("-");
    let finalImageURL = req.protocol + "://" + req.get("host") + "/public/uploads/" + fileName;

    await Doctor.update(
      {
        image: finalImageURL,
      },
      {
        where: {
          id: doctorId,
        },
      }
    );

    res.status(201).json({
      status: "success",
      code: 201,
      message: "Success update user photo",
    });
  }
};
