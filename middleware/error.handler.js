// error handler
const errorHandler = (err, req, res, next) => {
  console.info(err);

  return res.status(err.statusCode).json({
    status: err.status || "error",
    code: err.statusCode || 500,
    message: err.message || "Something went wrong",
  });
};

module.exports = errorHandler;
