var conn = require("./../configs/database");

exports.getMaxID = async () => {
  try {
    var result = await conn.query(
      `select max(commentID) as maxID from comment;`
    );
    var maxID = Number(result[0].maxID);
    return maxID;
  } catch (e) {
    throw e;
  }
};

// Get all commemts of the product base on productID
exports.getListCommentByID = async (id) => {
  try {
    var result = await conn.query(
      `select * from comment where productID='${id}';`
    );
    return result;
  } catch (e) {
    throw e;
  }
};

// Send comment
exports.sendComment = async (comment) => {
  try {
    let blacklist = [
      { key: "<", replace: "&lt;" },
      { key: ">", replace: "&gt;" },
      { key: '"', replace: "&quot;" },
      { key: "$", replace: "&#36;" },
      { key: "`", replace: "&#96;" },
      { key: "%", replace: "&#37;" },
      { key: "&", replace: "&#38;" },
      { key: "/", replace: "&#47;" },
    ];
    let lstString = comment.content.split("");
    lstString = lstString.map((item) => {
      let index = blacklist.findIndex((data) => data.key == item);
      if (index !== -1) {
        return blacklist[index].replace;
      }
      return item;
    });
    // console.log(lstString.join(''));
    comment.content = lstString.join("");

    var result =
      await conn.query(`INSERT INTO comment(commentID, commentTime, custName, custEmail, custPhone, content, productID) VALUES
        ('${comment.commentID}','${comment.commentTime}','${comment.custName}','${comment.custEmail}','${comment.custPhone}','${comment.content}','${comment.productID}')`);
    return result;
  } catch (e) {
    throw e;
  }
};
