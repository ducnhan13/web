const LoginService = require("../services/LoginService");

exports.renderLogin = async (req, res) => {
  try {
    let user = req.session.user ? req.session.user : null;

    res.render("pages/admin/login", { 
      user, 
    
    });
  } catch (e) {
    console.log(e);
    res.json([]);
  }
};
exports.getInfo = async (req, res) => {
  try {
    var data = req.body;
    var user = {
      userid: data.userid,
      userpassword: data.userpassword,
    };
    console.log('user input: ',user);
    
    let result = await LoginService.getInfo(user);
    //console.log("User.userpassword = ",user.userpassword);
    //console.log("Result[0].userpassword = ",result[0]);
    /* Cau lenh dung - SQL Injection*/ 
     if (user.userpassword == result[0].userpassword)  
    // /*Cau lenh sai - SQL Injection*/ if (result.length > 0)  
    {
      req.session.user = data.userid;
      console.log('req session: ',req.session.user);
      // console.log("true");
      res.redirect("/");
    } else {
      console.log("error-login");
      res.render("pages/error-page");
    }
    // console.log(data.userpassword);
    console.log('result: ',result);
  } catch (e) {}
};
exports.Logout = async (req, res) => {
  try {
    req.session.destroy();
    console.log("Session: ", req.session);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.json([]);
  }
};
