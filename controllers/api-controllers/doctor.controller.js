const { Doctor, Specialist } = require("../../models");

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

exports.getDoctorDetail = (req, res, next) => {
  const params = req.params;
  res.send(`getDoctorDetail /api/doctors/${params.id}`);
};
