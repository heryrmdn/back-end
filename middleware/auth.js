const { check } = require("express-validator");

module.exports = {
  registerValidation: check("name").isLength({ min: 1 }).withMessage("name is required"),
};
