const { check } = require("express-validator");

exports.validationRegister = [
  check("name", "Name is required").notEmpty(),
  check("email", "Email is required").notEmpty(),
  check("email", "Email must be in email format").isEmail(),
  check("password", "Password is required").notEmpty(),
];

exports.validationLogin = [
  check("email", "Email is required").notEmpty(),
  check("email", "Email must be in email format").isEmail(),
  check("password", "Password is required").notEmpty(),
];
