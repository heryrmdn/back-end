const { Doctor, Specialist } = require("../../models");

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
// exports.updateUserPhoto = (req, res, next) => {};
