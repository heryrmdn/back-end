const { User } = require("../models");
const { throwError } = require("../utils/throw-error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
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
    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("access_token", token, {
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

exports.logout = (req, res, next) => {
  res.clearCookie("access_token");

  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Logout successfull",
  });
};
