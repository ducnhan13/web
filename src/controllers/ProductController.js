const ProductService=require('../services/Product')
const ProductTypeService=require('../services/ProductType')
const CommentService = require('../services/Comment')

exports.getAll= async(req,res)=>{
    try{
        let user =req.session.user?req.session.user:null;
        if (user) {
            let products= await ProductService.getAll();
            res.render('pages/admin/manage-products',{
            
                products:products,
                user,
               
                
            });
        } 
        
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
};
exports.deleteByID= async(req,res)=>{
    try{
        let user =req.session.user?req.session.user:null; 
        console.log(user);
        if (user){
            let result= await ProductService.deleteByID(req.params.id);    
            if(result.affectedRows!==0){
                res.redirect('/admin/manage-products');
            }

        } else {
            res.redirect('/');
        }
        
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
};

exports.showCreate= async(req,res)=>{
    try{        
        let user =req.session.user?req.session.user:null;
        
        if (user) {
            let listProductTypes = await ProductTypeService.getAll(); 
            res.render('pages/admin/create-product',{
                
                listProductTypes,
                user,
               
            });
        } else {
            res.redirect('/');
        }
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
};

exports.create= async(req,res)=>{
    try{
        let user =req.session.user?req.session.user:null;
        if (user) {
                var data=req.body;
                let newProductID= await ProductService.getMaxID();  
                var product={
                    productID:newProductID+1,
                    productName:data.productName,
                    productTypeID:data.productTypeID,
                    salePrice:Number(data.salePrice),
                    description:data.description,
                    productImage:`/images/uploads/${req.file.filename}`
                }
                let result= await ProductService.create(product);     
                res.redirect('/admin/manage-products');
            }
    } catch(e){
        console.log(e);
        res.redirect('/');

            }
            
};

exports.showEdit= async(req,res)=>{
    try{   
        let user =req.session.user?req.session.user:null;
        if (user) {
            let count= await ProductService.isExisted(req.params.id); 
            if(!count){
                res.redirect('/404');
            }
            let listProductTypes = await ProductTypeService.getAll(); 
            let editProduct=await ProductService.getByID(req.params.id); 
            res.render('pages/admin/update-product',{
              
                listProductTypes,
                editProduct:editProduct,
                user
            });
        }
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
}


// Get all products
// exports.getAll= async(req,res)=>{
//     try{
//         let products= await ProductService.getAll();
//         //res.json(products);
//         res.render('pages/home');
       
//     }catch(e){
//         console.log(e);
//         res.json([]);
//     }
// };

exports.update= async(req,res)=>{
    try{
        let user =req.session.user?req.session.user:null;
        if (user) {
            var data=req.body;
            var product={
                productID:data.productID,
                productName:data.productName,
                productTypeID:data.productTypeID,
                salePrice:Number(data.salePrice),
                description:data.description,
            }
            let result= await ProductService.updateByID(product); 
      
            res.redirect('/admin/manage-products');
        }
       
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
};

//hiển thị chi tiết sản phẩm
exports.showProduct= async(req,res)=>{
    try{  
        let user =req.session.user?req.session.user:null;
        console.log("session",req.session);
        let count= await ProductService.isExisted(req.params.id); 
        if(!count){
            res.redirect('/404');
        }
        let product=await ProductService.getByID(req.params.id);  
        let productDetailComment = await CommentService.getListCommentByID(req.params.id);
        res.render('pages/product-detail',{
            product,
            comments: productDetailComment,
            id:req.params.id,
            user
        });
    }catch(e){
        console.log(e);
        res.redirect('/');

    }
};
// // Get product details and show all comment(s) of this product
// exports.getProductDetails = async(req,res) => {
//     try{
        
//         //console.log(req.params.id);
//         res.render('pages/product-detail',{
            
//         });
//     } catch(e) {
//         console.log(e);
//         res.json([]);
//     }
// }

// Send comment about the product
exports.sendComment = async(req,res) => {
    try {
        var data = req.body;
        var id = req.params.id;
        //console.log(data);
        //console.log(id);

        var newCommentID = await CommentService.getMaxID();
        var custComment={
            commentID: newCommentID + 1,
            commentTime: new Date().toString(), // convert type Date to type String
            custName: data.custName,
            custEmail: data.custEmail,
            custPhone: data.custPhone,
            content: data.content,
            productID: id
        }
        console.log('prd ctrl - custcomment: ',custComment); // log result - for debugging

        let result = await CommentService.sendComment(custComment);
        console.log(result);

        if (result === null) {
            res.render("pages/warning-page");
            console.log('to warning');
        }
        else
        {
            let user =req.session.user?req.session.user:null;
        
            res.redirect('/products/' + id); 
    
        }
    } catch(e) {
        console.log(e);
        res.redirect('/');

    }
}
