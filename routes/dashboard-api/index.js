const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const reservationRouter = require("./reservation");
const articleRouter = require("./article");

router.use("/auth", authRouter);
router.use("/reservations", reservationRouter);
router.use("/articles", articleRouter);

module.exports = router;
