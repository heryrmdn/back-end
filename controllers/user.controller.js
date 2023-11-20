const bcrypt = require("bcrypt");
const { User } = require("../models");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const emailUser = await User.findOne({ where: { email: email } });
  if (emailUser) {
    const err = new Error("Email is already registered");
    (err.status = "fail"), (err.statusCode = 404);
    next(err);
  }
};
