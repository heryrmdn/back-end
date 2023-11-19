const errorHandler = (err, req, res, next) => {
  if (err.message == "data and salt arguments required") {
    console.log(err);

    return res.status(400).json({
      status: "error",
      code: 400,
      message: "Payload not found",
    });
  }

  if (err.message == "Validation error") {
    console.log(err);

    return res.status(400).json({
      status: "error",
      code: 400,
      message: "Email is already registered",
    });
  }

  console.log(err);

  return res.status(500).json({
    status: "error",
    code: 500,
    message: "Something went wrong",
  });
};

module.exports = errorHandler;
