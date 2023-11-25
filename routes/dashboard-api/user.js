const express = require("express");
const { getUserDetail, updateUser, updateUserPhoto } = require("../../controllers/dashboard-api-controllers/user.controller");
const { authorization } = require("../../middleware/auth-doctor-middleware");
const { tryCatch } = require("../../utils/try-catch");
const { validationUpdateUserDashboard, runValidation } = require("../../validation");
const router = express.Router();

router.get("/", authorization, tryCatch(getUserDetail));
router.put("/", authorization, validationUpdateUserDashboard, runValidation, tryCatch(updateUser));
// router.put("/", authorization, tryCatch(updateUserPhoto));

module.exports = router;
