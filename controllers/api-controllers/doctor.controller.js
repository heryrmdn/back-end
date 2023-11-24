exports.getDoctorList = (req, res, next) => {
  res.send("getDoctorList /api/doctors");
};

exports.getDoctorDetail = (req, res, next) => {
  const params = req.params;
  res.send(`getDoctorDetail /api/doctors/${params.id}`);
};
