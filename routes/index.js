const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const adminRouter = require("./admin.route");
const doctorRouter = require("./doctor.route");

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Klinik Heula RESTful API",
  });
});

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/doctor", doctorRouter);

module.exports = router;
