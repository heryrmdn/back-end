// higher order function menerima parameter controller
exports.tryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    return next(err);
  }
};

exports.handleErrors = (message, statusCode, next) => {
  const err = new Error(message);
  err.status = "error";
  err.statusCode = statusCode;
  next(err);
};
