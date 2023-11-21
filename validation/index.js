const { validationResult, check } = require("express-validator");
const { throwError } = require("../utils/throw-error");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throwError(errors.array()[0].msg, 404, next);
  }
  next();
};

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
