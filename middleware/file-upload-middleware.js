const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    const fileOriginalName = path.parse(file.originalname).name.split(" ").join("-");
    cb(null, fileOriginalName + "-" + Date.now() + path.extname(file.originalname));
  },
});

const uploadSingleImage = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpg" || file.mimetype == "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Unaccepted file type, allowed files are only jpg/jpeg/png files"));
    }
  },
}).single("image");

module.exports = uploadSingleImage;
