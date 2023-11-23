require("dotenv").config();
const jwt = require("jsonwebtoken");
const { throwError } = require("../utils/throw-error");

exports.checkToken = (req, res, next) => {
  const token = req.cookies.user_token;

  if (!token) {
    throwError("No token found", 401, next);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      throwError("Invalid token", 403, next);
    } else {
      req.user = payload;
    }

    next();
  });
};
