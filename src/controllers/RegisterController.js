const RegisterService = require("../services/RegisterService");

exports.renderRegister = async (req, res) => {
  try {
    let user = req.session.user ? req.session.user : null;
    res.render("pages/admin/register", { user });
  } catch (e) {
    console.log(e);
    res.json([]);
  }
};
exports.sendInfo = async (req, res) => {
  try {
    var data = req.body;
    var newuser = {
      userid: data.userid,
      userpassword: data.userpassword,
      userphone: data.userphone,
      usermail: data.usermail,
    };
    let result = await RegisterService.sendInfo(newuser);
    res.redirect("/login");
  } catch (e) {
    console.log(e);
    res.json([]);
  }
};
