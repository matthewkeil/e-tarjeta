exports.isLoggedIn = (req, res, next) => {
  if (!req.user) {
    res.status(403);
    res.json({ message: "please log in" });
    res.end();
  }

  next();
};
