exports.isLogin=(req,res,next)=>{
    //req.session.user="admin";
    var result=req.session.user;
    if(result){
        next();
    }else{
        res.redirect('back');
    }
    
}