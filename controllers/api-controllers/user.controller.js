exports.getUserDetail = (req, res, next) => {
  const params = req.params;
  res.send(`getUserDetail /api/users/${params.id}`);
};
