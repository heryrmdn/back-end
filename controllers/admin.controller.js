require("dotenv").config();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const { throwError } = require("../utils/throw-error");

exports.registerAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;

  const isExistingUser = await User.findOne({ where: { email: email } });
  if (isExistingUser) {
    throwError("Email has already registered", 404, next);
  }

  const saltRounds = 10;
  const hashPassword = bcrypt.hashSync(password, saltRounds);

  await User.create({ name, email, password: hashPassword, roleId: "R0002" });

  return res.status(201).json({
    status: "success",
    code: 201,
    message: "Register successfull",
  });
};
