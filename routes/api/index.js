const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const doctorRouter = require("./doctor");
const articleRouter = require("./article");
const reservationRouter = require("./reservation");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/doctors", doctorRouter);
router.use("/articles", articleRouter);
router.use("/reservations", reservationRouter);

module.exports = router;
