exports.createReservation = (req, res, next) => {
  const userId = req.user.userId;
  console.info(userId);

  res.send("createReservation /api/reservations");
};

exports.getReservationDetail = (req, res, next) => {
  const params = req.params;

  res.send(`getReservationDetail /api/reservations/${params.id}`);
};
