// utility function untuk membuat kode di controller lebih sederhana
// yang merupakan bentuk higher order function yang menerima parameter sebuah controller
exports.tryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    return next(err);
  }
};
