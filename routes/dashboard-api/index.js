const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const reservationRouter = require("./reservation");
const articleRouter = require("./article");
const userRouter = require("./user");

router.use("/auth", authRouter);
router.use("/reservations", reservationRouter);
router.use("/articles", articleRouter);
router.use("/user", userRouter);

module.exports = router;
