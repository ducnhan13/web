var conn=require('./../configs/database');


const getAll= async ()=>{
    try{
        var list = await conn.query(`SELECT * from productTypes`);
         return list;
    }catch(e){
        throw e;
    }
};
module.exports ={ getAll}