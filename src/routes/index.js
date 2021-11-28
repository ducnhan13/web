const ProductRouter = require("./Product");
const HomeRouter = require("./Home");
const AdminRouter = require("./Admin");
const FeedbackRouter = require("./Feedback");
const { isLogin } = require("./../middlewares/isLogin");
const RegisterRouter = require("./Register");
const LoginRouter = require("./Login");
const LogoutRouter = require("./Logout");

const route = (app) => {
  app.use("/products", ProductRouter);
  app.use("/admin", isLogin, AdminRouter);
  app.use("/feedback", FeedbackRouter);
  app.use("/", HomeRouter);
  app.use("/register", RegisterRouter);
  app.use("/login", LoginRouter);
  app.use("/logout", LogoutRouter);
};

module.exports = route;
