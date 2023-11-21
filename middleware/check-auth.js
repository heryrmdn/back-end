require("dotenv").config();
const jwt = require("jsonwebtoken");
const { throwError } = require("../utils/throw-error");

exports.checkAuth = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    throwError("No token found", 401, next);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      throwError("Invalid token", 403, next);
    }

    req.user = {
      id: payload.id,
    };

    next();
  });
};
