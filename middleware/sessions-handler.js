const { throwError } = require("../utils/throw-error");

let sessions = {};

exports.setSession = (sessionId, userSession) => {
  sessions[sessionId] = userSession;
};

exports.getSession = (req, res, next) => {
  const sessionId = req.cookies.session;
  const userSession = sessions[sessionId];

  if (!userSession) throwError("Invalid session", 401, next);

  req.userSession = userSession;

  next();
};
