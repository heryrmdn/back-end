const { validationResult, check, query } = require("express-validator");
const { throwError } = require("../utils/throw-error");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throwError(errors.array()[0].msg, 404, next);
  }
  next();
};

exports.validationRegister = [
  check("name", "name is required").notEmpty(),
  check("email", "email is required").notEmpty(),
  check("email", "email must be in email format").isEmail(),
  check("password", "password is required").notEmpty(),
];

exports.validationLogin = [
  check("email", "email is required").notEmpty(),
  check("email", "email must be in email format").isEmail(),
  check("password", "password is required").notEmpty(),
];
