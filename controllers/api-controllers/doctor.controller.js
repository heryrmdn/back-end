const { Doctor, Specialist } = require("../../models");
const { throwError } = require("../../utils/throw-error");

exports.getDoctorList = async (req, res, next) => {
  const doctors = await Doctor.findAll({
    attributes: ["id", "name", "image", "rating", "hospital", "biography"],
    include: {
      model: Specialist,
      as: "specialist",
      attributes: ["name"],
    },
  });

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Success get doctor list",
    doctors,
  });
};

exports.getDoctorDetail = async (req, res, next) => {
  const paramsId = parseInt(req.params.id);

  const doctor = await Doctor.findOne({
    attributes: ["id", "name", "image", "rating", "hospital", "biography"],
    include: {
      model: Specialist,
      as: "specialist",
      attributes: ["name"],
    },
    where: {
      id: paramsId,
    },
  });

  if (!doctor) {
    throwError("Data not found", 404, next);
  } else {
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success get doctor detail",
      doctor,
    });
  }
};
