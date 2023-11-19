const errorHandler = (err, req, res, next) => {
  res.sendStatus(422);
};

module.exports = errorHandler;
