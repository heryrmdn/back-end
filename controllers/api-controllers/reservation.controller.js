exports.createReservation = (req, res, next) => {
  res.send("createReservation /api/reservations");
};

exports.getReservationDetail = (req, res, next) => {
  const params = req.params;

  res.send(`getReservationDetail /api/reservations/${params.id}`);
};
