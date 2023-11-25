require("dotenv").config();
const jwt = require("jsonwebtoken");
const { throwError } = require("../utils/throw-error");

exports.authorization = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) throwError("No token found", 401, next);

  jwt.verify(token, process.env.JWT_SECRET, (err, doctor) => {
    if (err) {
      throwError("Invalid token", 403, next);
    } else {
      req.doctor = doctor;
      next();
    }
  });
};
