const bcrypt = require("bcrypt");
const { User } = require("../models");
const { tryCatch } = require("../utils/tryCatch");

module.exports = {
  register: async (req, res) => {
    const payload = req.body;
    const saltRounds = 10;

    payload.password = bcrypt.hashSync(payload.password, saltRounds);
    await User.create(payload);

    res.status(201).json({
      status: "success",
      code: 201,
      message: "Registration succesfull",
    });
  },
};
