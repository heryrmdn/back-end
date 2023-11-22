require("dotenv").config();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { throwError } = require("../utils/throw-error");
const { Op } = require("sequelize");

exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const isExistingUser = await User.findOne({ where: { email: email } });
  if (isExistingUser) {
    throwError("Email has already registered", 404, next);
  }

  const saltRounds = 10;
  const hashPassword = bcrypt.hashSync(password, saltRounds);

  await User.create({ name, email, password: hashPassword });

  return res.status(201).json({
    status: "success",
    code: 201,
    message: "Register successfull",
  });
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    throwError("Email has not yet registered", 404, next);
  }

  const isPasswordMatch = bcrypt.compareSync(password, user.password);
  if (!isPasswordMatch) {
    throwError("Password does not match", 404, next);
  }

  if (user && isPasswordMatch) {
    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("access_token", token, {
      httpOnly: true,
    });

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Login successfull",
      data: {
        id: user.id,
      },
    });
  }
};

exports.logoutUser = (req, res, next) => {
  res.clearCookie("access_token");

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Logout successfull",
  });
};

exports.getUserById = async (req, res, next) => {
  const user = req.user;
  const payload = req.params;

  // find one data where ID is the same as that from cookies & query parameters
  const data = await User.findOne({
    attributes: ["id", "name", "image", "email", "phone_number", "sex"],
    where: {
      [Op.and]: [{ id: user.id }, { id: payload.id }],
    },
  });

  if (!data) {
    return throwError("Data not found", 404, next);
  }

  return res.send(data);
};
