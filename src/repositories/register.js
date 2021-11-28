var conn = require("./../configs/database");

exports.sendInfo = async (newuser) => {
  try {
    var result = await conn.query(
      `insert into user(userid, userpassword, userphone, usermail) values ('${newuser.userid}','${newuser.userpassword}','${newuser.userphone}','${newuser.usermail}')`
    );
    return result;
  } catch (e) {
    throw e;
  }
};
