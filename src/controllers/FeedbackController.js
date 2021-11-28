const FeedbackService = require('../services/Feedback');

// Admin Area - Manage feedback
exports.getAll = async(req,res) => {
    try {
        let user =req.session.user?req.session.user:null;
        if (user) {
            let feedbacks = await FeedbackService.getAll();
            res.render('pages/admin/manage-feedback', {
                feedbacks: feedbacks,
                user:user,
            });
        }
       
    } catch(e){
        console.log(e);
        res.redirect('back');
    }
}

// Render view "feedback"
exports.renderSendFeedback = async (req,res) => {
    try {
        let user =req.session.user?req.session.user:null;
        res.render('pages/feedback',{
            user:user,
        });
    } catch(e){
        console.log(e);
        res.redirect('back');
    }
}

// Customer send Feedback
exports.sendFeedback = async(req,res) => {
    try {
        var data = req.body;
        //console.log(data);
        var newFeedbackID = await FeedbackService.getMaxID();
        var feedback={
            feedbackID: newFeedbackID+1,
            custName: data.custName,
            productName: data.productName,
            custPhone: data.custPhone,
            custEmail: data.custEmail,
            content: data.content
        }
        //console.log(feedback);
        let result = await FeedbackService.sendFeedback(feedback);
        let user =req.session.user?req.session.user:null;
        res.redirect('/feedback');
    } catch(e) {
        console.log(e);
        res.redirect('back');
    }
}
