require("dotenv").config();
const { User, Role } = require("../models");
const bcrypt = require("bcrypt");
const { throwError } = require("../utils/throw-error");

exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const isExistingUser = await User.findOne({ where: { email: email } });
  if (isExistingUser) {
    throwError("Email has already registered", 404, next);
  }

  const saltRounds = 10;
  const hashPassword = bcrypt.hashSync(password, saltRounds);

  await User.create({ name, email, password: hashPassword, roleId: "R0001" });

  return res.status(201).json({
    status: "success",
    code: 201,
    message: "Register successfull",
  });
};

exports.getUserById = async (req, res, next) => {
  const role = req.type.role;
  const payload = req.params;
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
    where: { id: payload.id },
  });

  if (!user) {
    throwError("Data not found", 404, next);
  }

  if (role == "Admin") {
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Success Get User by id",
      data: user,
    });
  }

  if (role == "User" && userId == payload.id) {
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
