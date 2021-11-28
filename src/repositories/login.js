var conn = require("./../configs/database");

exports.getInfo = async (user) => {
  try {
    //console.log(`select userid from user where userid='${user.userid}';`);
     var id = await conn.query(
      `select userid from user where userid='${user.userid}';`
    ); 
    //console.log("Query id: ", typeof(user.userid));
    var pass = await conn.query(
      // truong hop sai (SQL Injection vi lay user va pass)
      // `select userpassword from user where userid='${user.userid}' and userpassword='${user.userpassword}';`

      //truong hop dung: lay pass tu user
      `select userpassword from user where userid='${user.userid}';`
    );
    // console.log("Query pass: ",pass);
    return pass;
  } catch (e) {
    throw e;
  }
};
