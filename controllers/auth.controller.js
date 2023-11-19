const bcrypt = require("bcrypt");
const { User } = require("../models");
const { validationResult } = require("express-validator");

module.exports = {
  register: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.mapped(),
      });
    }

    const payload = req.body;
    const saltRounds = 10;

    payload.password = bcrypt.hashSync(payload.password, saltRounds);
    await User.create(payload);

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "Registration succesfull",
    });
  },

  login: async (req, res) => {
    const payload = req.body;

    const user = await User.findOne({ where: { email: payload.email } });
    const isValidPassword = bcrypt.compareSync(payload.password, user.password);
    if (user === null) {
      throw new Error("Username or password incorrect");
    }

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Login succesfull",
      data: user,
    });
  },
};
