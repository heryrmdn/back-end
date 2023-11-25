const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Doctor } = require("../../models");
const { throwError } = require("../../utils/throw-error");

exports.login = async (req, res, next) => {
  const body = req.body;

  const doctor = await Doctor.findOne({
    where: {
      email: body.email,
    },
  });

  if (!doctor) throwError("Email not registered", 404, next);

  const isValidPassword = bcrypt.compareSync(body.password, doctor.password);

  if (!isValidPassword) throwError("Password doesn't match", 404, next);

  if (doctor && isValidPassword) {
    const token = jwt.sign({ email: doctor.email, doctorId: doctor.id }, process.env.JWT_SECRET);

    return res.status(201).json({
      status: "success",
      code: 200,
      message: "Login successfull",
      data: {
        access_token: token,
      },
    });
  }
};

exports.register = async (req, res, next) => {
  const body = req.body;

  const isExistingDoctor = await Doctor.findOne({
    where: {
      email: body.email,
    },
  });

  if (isExistingDoctor) {
    throwError("Email is already registered", 404, next);
  } else {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(body.password, saltRounds);

    await Doctor.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "Register successfull",
    });
  }
};
