const { Op } = require("sequelize");
const { Reservation, Doctor, Specialist, Package, Sequelize } = require("../../models");
const { throwError } = require("../../utils/throw-error");

exports.createReservation = async (req, res, next) => {
  const userId = req.user.userId;
  const body = req.body;

  const isMadeReservation = await Reservation.findOne({
    where: {
      [Op.and]: [{ customerId: userId }, { date: body.date }, { time: body.time }],
      [Op.or]: [{ status: "Pending" }, { status: "Approved" }],
    },
  });

  if (isMadeReservation) return throwError("Reservation rejected, you have already made a reservation on this schedule", 400, next);

  const isExistingReservation = await Reservation.findOne({
    where: {
      [Op.and]: [{ doctorId: body.doctorId }, { date: body.date }, { time: body.time }],
      [Op.or]: [{ status: "Pending" }, { status: "Approved" }],
    },
  });

  if (isExistingReservation) return throwError("Reservation rejected, this schedule has been reserved on another reservation number", 400, next);

  const reservation = await Reservation.create({
    customerId: userId,
    doctorId: body.doctorId,
    date: body.date,
    time: body.time,
    packageId: body.packageId,
  });

  return res.status(201).json({
    status: "success",
    code: 201,
    message: "Success create reservation",
    reservationId: reservation.id,
  });
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
    message: "Success Get reservation list",
    reservations,
  });
};

exports.getReservationDetail = async (req, res, next) => {
  const userId = req.user.userId;
  const paramsId = parseInt(req.params.id);

  const reservation = await Reservation.findOne({
    attributes: ["id", "date", "time", "status", "createdAt", "updatedAt"],
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
      message: "Success Get reservation detail",
      reservation,
    });
  }
};
