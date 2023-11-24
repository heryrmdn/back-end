const { setSession } = require("../../middleware/sessions-handler");
const { Customer } = require("../../models");
const { throwError } = require("../../utils/throw-error");
const bcrypt = require("bcrypt");
const uuidv4 = require("uuid").v4;

exports.login = async (req, res, next) => {
  const body = req.body;

  const user = await Customer.findOne({
    where: {
      email: body.email,
    },
  });

  if (!user) throwError("Email not registered", 404, next);

  const isValidPassword = bcrypt.compareSync(body.password, user.password);

  if (!isValidPassword) throwError("Password doesn't match", 404, next);

  if (user && isValidPassword) {
    const sessionId = uuidv4();
    const userSession = { email: user.email, userId: user.id };

    setSession(sessionId, userSession);

    res.cookie("session", sessionId);

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "Login successfull",
      userId: userSession.userId,
    });
  }
};

exports.register = async (req, res, next) => {
  const body = req.body;

  const isExistingUser = await Customer.findOne({
    where: {
      email: body.email,
    },
  });

  if (isExistingUser) {
    throwError("Email is already registered", 404, next);
  } else {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(body.password, saltRounds);

    await Customer.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "Register successfull",
    });
  }
};
