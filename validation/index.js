const { validationResult } = require("express-validator");
const { handleErrors } = require("../utils");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    handleErrors(errors.array()[0].msg, 404, next);
  }
  next();
};
