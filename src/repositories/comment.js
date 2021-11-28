var conn=require('./../configs/database');

exports.getMaxID= async ()=>{
    try{
        var result = await conn.query(`select max(commentID) as maxID from comment;`);
        var maxID=Number(result[0].maxID);
        return maxID;
    }catch(e){
        throw e;
    }
};

// Get all commemts of the product base on productID
exports.getListCommentByID= async (id) => {
    try {
        var result = await conn.query(`select * from comment where productID='${id}';`);
        return result;
    } catch(e) {
        throw e;
    }
}

// Send comment
exports.sendComment = async (comment) => {
    try {
        let black_list = /[a-zA-Z0-9]*<script>(.*)<\/script>[a-zA-Z0-9]*/; 
        console.log('comment content: ',comment.content);

        //kt dk input
        if (black_list.test(comment.content)) {
            return null;
        }
        
        console.log("XSS script: ",black_list.test(comment.content))
        var result = await conn.query(`INSERT INTO comment(commentID, commentTime, custName, custEmail, custPhone, content, productID) VALUES
        ('${comment.commentID}','${comment.commentTime}','${comment.custName}','${comment.custEmail}','${comment.custPhone}','${comment.content}','${comment.productID}')`);



        return result;
    } catch(e) {
        throw e;
    }
}