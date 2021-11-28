const ProductTypeRepo =require ('./../repositories/productType.js')

exports.getAll = async() =>{
    try{
        const listProductTypes=await ProductTypeRepo.getAll();
        return listProductTypes;
    }catch(e){
        throw e;
    }
}