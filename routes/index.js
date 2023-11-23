const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const doctorRouter = require("./doctor.route");
const articleRouter = require("./article.route");
const bookRouter = require("./book.route");

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Klinik Heula RESTful API",
  });
});

router.use("/user", userRouter);
router.use("/doctor", doctorRouter);
router.use("/article", articleRouter);
router.use("/book", bookRouter);

module.exports = router;
