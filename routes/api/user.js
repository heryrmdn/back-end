const { getUserDetail, updateUserPhoto, updateUser } = require("../../controllers/api-controllers/user.controller");
const { tryCatch } = require("../../utils/try-catch");
const { authorization } = require("../../middleware/auth-middleware");
const express = require("express");
const { validationUpdateUser, runValidation, validationUpdatePhoto } = require("../../validation");
const uploadSingleImage = require("../../middleware/file-upload-middleware");
const router = express.Router();

router.get("/", authorization, tryCatch(getUserDetail));
router.put("/", authorization, validationUpdateUser, runValidation, tryCatch(updateUser));
router.put("/upload", authorization, uploadSingleImage, tryCatch(updateUserPhoto));

module.exports = router;
