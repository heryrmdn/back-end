const express = require("express");
const { throwError } = require("../utils/throw-error");
const app = express();

app.all("*", (req, res, next) => throwError(`Can't find ${req.originalUrl} on the server!`, 404, next));

module.exports = app;
