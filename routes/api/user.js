const { getUserDetail, updateUserPhoto, updateUser } = require("../../controllers/api-controllers/user.controller");
const { tryCatch } = require("../../utils/try-catch");
const { uploadOptions } = require("../../utils/file-upload");
const { authorization } = require("../../middleware/auth-middleware");
const express = require("express");
const router = express.Router();

router.get("/", authorization, tryCatch(getUserDetail));
router.put("/", authorization, tryCatch(updateUser));
// router.put("/", uploadOptions.single("image"), updateUserPhoto);

module.exports = router;
