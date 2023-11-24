exports.getReservationList = (req, res, next) => {
  res.send("getReservationList /dashboard-api/reservations");
};

exports.getReservationDetail = (req, res, next) => {
  const params = req.params;

  res.send(`getReservationDetail /dashboard-api/reservations/${params.id}`);
};

exports.UpdateReservation = (req, res, next) => {
  const params = req.params;

  res.send(`UpdateReservation /dashboard-api/reservations/${params.id}`);
};
