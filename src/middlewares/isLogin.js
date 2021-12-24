exports.isLogin = (req, res, next) => {
  //req.session.user="admin";
  let user = req.session.user ? req.session.user : null;
  if (user) {
    next();
  } else {
    res.redirect("back");
  }
};
