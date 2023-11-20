require("dotenv").config();
const { Admin } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { handleErrors } = require("../utils");

exports.registerAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;

  const existingAdmin = await Admin.findOne({ where: { email: email } });

  if (existingAdmin) {
    handleErrors("Email has already registered", 404, next);
  }

  const saltRounds = 10;
  const hashPassword = bcrypt.hashSync(password, saltRounds);

  await Admin.create({ name, email, password: hashPassword });

  return res.status(201).json({
    status: "success",
    code: 201,
    message: "Register successfull",
  });
};

exports.loginAdmin = async (req, res, next) => {
  const { email, password } = req.body;

  const dataAdmin = await Admin.findOne({ where: { email: email } });
  if (!dataAdmin) {
    handleErrors("Email has not yet registered", 404, next);
  }

  const passwordAdmin = bcrypt.compareSync(password, dataAdmin.password);
  if (!passwordAdmin) {
    handleErrors("Password does not match", 404, next);
  }

  if (dataAdmin && passwordAdmin) {
    const data = { id: dataAdmin.id };
    const token = jwt.sign(data, process.env.JWT_SECRET);

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Login successfull",
      token,
    });
  }
};
