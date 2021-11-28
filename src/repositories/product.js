var conn=require('./../configs/database');


exports.getAll= async ()=>{
    try{
        var lstProducts = await conn.query('SELECT * from products  INNER JOIN productTypes ON products.productTypeID = productTypes.productTypeID ;');
         return lstProducts;
    }catch(e){
        throw e;
    }
};

exports.deleteByID= async (id)=>{
    try{
        var result = await conn.query(`delete from products  where productID=${id};`);
         return result;
    }catch(e){
        throw e;
    }
};

exports.getMaxID= async ()=>{
    try{
        var result = await conn.query(`select max(productID) as maxID from products;`);
        var maxID=Number(result[0].maxID);
        return maxID;
    }catch(e){
        throw e;
    }
};

exports.create= async (product)=>{
    try{
        var result = await conn.query(`INSERT INTO products (productID, productName, productTypeID, salePrice,productImage,description) VALUES
        ('${product.productID}', '${product.productName}', '${product.productTypeID}', ${product.salePrice}, '${product.productImage}','${product.description}')`);
        
        return result;
    }catch(e){
        throw e;
    }
};

exports.getByID= async (id)=>{
    try{
        var result = await conn.query(`SELECT * from products  INNER JOIN productTypes ON products.productTypeID = productTypes.productTypeID where productID='${id}';`);
         var product=result[0];
         console.log(product);
        return product;
    }catch(e){
        throw e;
    }
};

exports.isExisted= async (id)=>{
    try{
        var result = await conn.query(`SELECT count(productID) as count from products  where productID='${id}';`);
        var isExisted=Number(result[0].count)===0?false:true;
        return isExisted;
    }catch(e){
        throw e;
    }
};

exports.updateByID= async (product)=>{
    try{
        var result = await conn.query(`update products  set productName='${product.productName}',salePrice=${product.salePrice},
        productTypeID ='${product.productTypeID}', description='${product.description}' where productID='${product.productID}';`);
        console.log(result);
        return result;
    }catch(e){
        throw e;
    }
};

//module.exports ={getAll}
