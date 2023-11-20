require("dotenv").config();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { handleErrors } = require("../utils");

exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ where: { email: email } });
  if (existingUser) {
    handleErrors("Email has already registered", 404, next);
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

  const dataUser = await User.findOne({ where: { email: email } });
  if (!dataUser) {
    handleErrors("Email has not yet registered", 404, next);
  }

  const passwordUser = bcrypt.compareSync(password, dataUser.password);
  if (!passwordUser) {
    handleErrors("Password does not match", 404, next);
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
