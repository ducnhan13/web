var conn=require('./../configs/database');

exports.getMaxID= async ()=>{
    try{
        var result = await conn.query(`select max(feedbackID) as maxID from feedback;`);
        var maxID=Number(result[0].maxID);
        return maxID;
    }catch(e){
        throw e;
    }
};

exports.getAll= async ()=>{
    try{
        var listFeedbacks = await conn.query('SELECT * from feedback');
         return listFeedbacks;
    }catch(e){
        throw e;
    }
};

exports.sendFeedback = async (feedback) => {
    try {
        var result = await conn.query(`INSERT INTO feedback (feedbackID, custName, productName, custPhone, custEmail, content) VALUES 
        ('${feedback.feedbackID}','${feedback.custName}','${feedback.productName}','${feedback.custPhone}','${feedback.custEmail}','${feedback.content}')`);

        return result;
    } catch(e) {
        throw e;
    }
}