require("dotenv").config();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;

  const emailUser = await User.findOne({ where: { email: email } });
  if (emailUser) {
    const err = new Error("Email has already registered");
    err.status = "error";
    err.statusCode = 404;

    next(err);
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

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  const dataUser = await User.findOne({ where: { email: email } });
  if (!dataUser) {
    const err = new Error("Email has not yet registered");
    err.status = "error";
    err.statusCode = 404;

    next(err);
  }

  const passwordUser = bcrypt.compareSync(password, dataUser.password);
  if (!passwordUser) {
    const err = new Error("Password does not match");
    err.status = "error";
    err.statusCode = 404;

    next(err);
  }

  if (dataUser && passwordUser) {
    const data = { id: dataUser.id };
    const token = jwt.sign(data, process.env.JWT_SECRET);

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Login successfull",
      token,
    });
  }
};
