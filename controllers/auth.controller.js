const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = {
  register: async (req, res) => {
    const payload = req.body;
    const saltRounds = 10;

    payload.password = bcrypt.hashSync(payload.password, saltRounds);

    try {
      await User.create(payload);

      res.status(201).json({
        status: true,
        message: "Register succesfull",
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  },
};
