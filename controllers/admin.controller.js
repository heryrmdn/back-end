require("dotenv").config();
const { Admin } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { throwError } = require("../utils/throw-error");

exports.registerAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;

  const isExistingAdmin = await Admin.findOne({ where: { email: email } });
  if (isExistingAdmin) {
    throwError("Email has already registered", 404, next);
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

  const admin = await Admin.findOne({ where: { email: email } });
  if (!admin) {
    throwError("Email has not yet registered", 404, next);
  }

  const isPasswordMatch = bcrypt.compareSync(password, admin.password);
  if (!isPasswordMatch) {
    throwError("Password does not match", 404, next);
  }

  if (admin && isPasswordMatch) {
    const payload = { id: admin.id, email: admin.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("access_token", token, {
      httpOnly: true,
    });

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Login successfull",
      data: {
        id: admin.id,
      },
    });
  }
};

exports.logoutAdmin = (req, res, next) => {
  res.clearCookie("access_token");

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Logout successfull",
  });
};

exports.getAdminById = (req, res, next) => {
  console.info(req.user);

  res.send(req.user);
};
