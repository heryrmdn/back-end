const { Doctor, Specialist, Hospital } = require("../models");

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

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Success Get All Doctors",
    data: doctors,
  });
};
