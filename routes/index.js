const express = require("express");
const router = express.Router();
const authRouter = require("./auth.route");

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to Klinik Heula RESTful API",
  });
});

router.use("/auth", authRouter);

module.exports = router;
