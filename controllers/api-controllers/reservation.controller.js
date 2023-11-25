const { Op } = require("sequelize");
const { Reservation, Doctor, Specialist, Package } = require("../../models");
const { throwError } = require("../../utils/throw-error");

exports.createReservation = async (req, res, next) => {
  const userId = req.user.userId;
  const body = req.body;
  body.customerId = userId;

  const isExistingReservation = await Reservation.findOne({
    where: {
      [Op.and]: [{ customerId: userId }, { doctorId: body.doctorId }, { status: "Pending" }],
    },
  });

  if (isExistingReservation) {
    throwError("Reservation rejected, this reservation has been made with pending status", 404, next);
  } else {
    const reservation = await Reservation.create(body);
    res.status(201).json({
      status: "success",
      code: 201,
      message: "Success create reservation",
      reservationId: reservation.id,
    });
  }
};

exports.getReservationList = async (req, res, next) => {
  const userId = req.user.userId;

  const reservations = await Reservation.findAll({
    attributes: ["id", "date", "status"],
    include: {
      model: Doctor,
      as: "doctor",
      attributes: ["name", "image"],
      include: {
        model: Specialist,
        as: "specialist",
        attributes: ["name"],
      },
    },
    where: {
      customerId: userId,
    },
  });

  return res.status(200).json({
    status: "success",
    code: 200,
    reservations,
  });
};

exports.getReservationDetail = async (req, res, next) => {
  const userId = req.user.userId;
  const paramsId = parseInt(req.params.id);

  const reservation = await Reservation.findOne({
    attributes: ["id", "date", "time", "status"],
    include: [
      {
        model: Doctor,
        as: "doctor",
        attributes: ["name", "image", "hospital"],
        include: {
          model: Specialist,
          as: "specialist",
          attributes: ["name"],
        },
      },
      {
        model: Package,
        as: "package",
        attributes: ["name", "price", "duration"],
      },
    ],
    where: {
      [Op.and]: [{ customerId: userId }, { id: paramsId }],
    },
  });

  if (!reservation) {
    throwError("Data not found", 404, next);
  } else {
    return res.status(200).json({
      status: "success",
      code: 200,
      reservation,
    });
  }
};
