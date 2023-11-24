exports.getArticleList = (req, res, next) => {
  res.send("getArticleList /api/articles");
};

exports.getArticleDetail = (req, res, next) => {
  const params = req.params;
  res.send(`getArticleDetail /api/articles/${params.id}`);
};
