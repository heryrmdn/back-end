exports.getArticleList = (req, res, next) => {
  res.send("getArticleList /dashboard-api/articles");
};

exports.getArticleDetail = (req, res, next) => {
  const params = req.params;

  res.send(`getArticleDetail /dashboard-api/articles/${params.id}`);
};

exports.createArticle = (req, res, next) => {
  res.send("createArticle /dashboard-api/articles");
};

exports.updateArticle = (req, res, next) => {
  const params = req.params;

  res.send(`updateArticle /dashboard-api/articles/${params.id}`);
};

exports.deleteArticle = (req, res, next) => {
  const params = req.params;

  res.send(`deleteArticle /dashboard-api/articles/${params.id}`);
};
