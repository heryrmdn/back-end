// error handler
const errorHandler = (err, req, res, next) => {
  console.info(err);

  err.status = err.status || "error";
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Something went wrong";

  return res.status(err.statusCode).json({
    status: err.status,
    code: err.statusCode,
    message: err.message,
  });
};

module.exports = errorHandler;
