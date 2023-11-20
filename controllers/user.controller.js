const { User } = require("../models");
const bcrypt = require("bcrypt");

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
