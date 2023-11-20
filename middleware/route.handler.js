const routeHandler = (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on the server!`);
  err.status = "error";
  err.statusCode = 404;

  next(err);
};

module.exports = routeHandler;
