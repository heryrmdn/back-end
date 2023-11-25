const { Op } = require("sequelize");
const { Reservation, Customer, Package } = require("../../models");
const { throwError } = require("../../utils/throw-error");

exports.getReservationList = async (req, res, next) => {
  const doctorId = req.doctor.doctorId;

  const reservations = await Reservation.findAll({
    attributes: ["id", "date", "status"],
    include: {
      model: Customer,
      as: "customer",
      attributes: ["name", "image"],
    },
    where: {
      doctorId: doctorId,
    },
  });

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Success get reservation list",
    reservations,
  });
};

exports.getReservationDetail = async (req, res, next) => {
  const doctorId = req.doctor.doctorId;
  const paramsId = parseInt(req.params.id);

  const reservation = await Reservation.findOne({
    attributes: ["id", "date", "time", "status", "createdAt", "updatedAt"],
    include: [
      {
        model: Customer,
        as: "customer",
        attributes: ["name", "image"],
      },
      {
        model: Package,
        as: "package",
        attributes: ["name", "price", "duration"],
      },
    ],
    where: {
      [Op.and]: [{ doctorId: doctorId }, { id: paramsId }],
    },
  });

  if (!reservation) {
    throwError("Data not found", 404, next);
  } else {
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success get reservation detail",
      reservation,
    });
  }
};

exports.UpdateReservation = async (req, res, next) => {
  const doctorId = req.doctor.doctorId;
  const paramsId = parseInt(req.params.id);
  const body = req.body;

  const isValidReservation = await Reservation.findOne({
    where: {
      [Op.and]: [{ doctorId: doctorId }, { id: paramsId }],
    },
  });

  if (!isValidReservation) {
    throwError("Data not found", 404, next);
  } else {
    await Reservation.update(
      { status: body.status },
      {
        where: {
          [Op.and]: [{ doctorId: doctorId }, { id: paramsId }],
        },
      }
    );

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success update reservation",
    });
  }
};
