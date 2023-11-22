const { Doctor, Specialist, Hospital } = require("../models");
const { throwError } = require("../utils/throw-error");

exports.getAllDoctor = async (req, res, next) => {
  const doctors = await Doctor.findAll({
    attributes: ["id", "name", "image", "rating", "name"],
    include: [
      {
        model: Specialist,
        as: "specialist",
        attributes: ["name"],
      },
      {
        model: Hospital,
        as: "hospital",
        attributes: ["name", "city"],
      },
    ],
  });

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Success Get All Doctors",
    data: doctors,
  });
};

exports.getDoctorById = async (req, res, next) => {
  const payload = req.params;

  const doctor = await Doctor.findOne({
    attributes: ["id", "name", "image", "rating", "name"],
    include: [
      {
        model: Specialist,
        as: "specialist",
        attributes: ["name"],
      },
      {
        model: Hospital,
        as: "hospital",
        attributes: ["name", "city"],
      },
    ],
    where: {
      id: payload.id,
    },
  });

  if (!doctor) {
    return throwError("Data not found", 404, next);
  }

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Success Get Doctor by id",
    data: doctor,
  });
};
