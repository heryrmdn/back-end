require("dotenv").config();
const { User, Role } = require("../models");
const { throwError } = require("../utils/throw-error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    const payload = { id: user.id, email: user.email, role: "user" };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("user_token", token, {
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
  res.clearCookie("user_token");

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Logout successfull",
  });
};

exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const isExistingUser = await User.findOne({ where: { email: email } });
  if (isExistingUser) throwError("Email has already registered", 404, next);

  const saltRounds = 10;
  const hashPassword = bcrypt.hashSync(password, saltRounds);

  await User.create({ name, email, password: hashPassword, roleId: "R0001" });
  Ili;

  return res.status(201).json({
    status: "success",
    code: 201,
    message: "Register successfull",
  });
};

exports.getUserById = async (req, res, next) => {
  const paramsId = req.params.id;
  const role = req.query.role;
  const userId = req.user.id;

  const user = await User.findOne({
    attributes: ["id", "name", "image", "email", "phoneNumber", "sex"],
    include: [
      {
        model: Role,
        as: "role",
        attributes: ["name"],
      },
    ],
    where: { id: paramsId },
  });

  if (!user) throwError("Data not found", 404, next);

  if (role === "admin" || (role === "user" && paramsId === userId)) {
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success Get User by id",
      data: user,
    });
  } else {
    throwError("Access denied", 404, next);
  }
};
