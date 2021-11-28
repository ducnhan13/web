const FeedbackRepo =require ('./../repositories/feedback.js')

exports.getMaxID = async() =>{
    try{
        const result =await FeedbackRepo.getMaxID();
        return result;
    }catch(e){
        throw e;
    }
}

exports.getAll = async() =>{
    try{
        const listFeedbacks=await FeedbackRepo.getAll();
        return listFeedbacks;
    }catch(e){
        throw e;
    }
}

exports.sendFeedback = async(feedback) => {
    try {
        const custFeedback = await FeedbackRepo.sendFeedback(feedback);
        return custFeedback;
    } catch(e){
        throw e;
    }
}