// utility function untuk melempar error secara sederhana
exports.throwError = (message, statusCode, next) => {
  const err = new Error(message);
  err.status = "error";
  err.statusCode = statusCode;
  next(err);
};
