const ProductRepo =require ('./../repositories/product.js')


exports.getAll = async() =>{
    try{
        const listProducts=await ProductRepo.getAll();
        return listProducts;
    }catch(e){
        throw e;
    }
}

exports.deleteByID = async(id) =>{
    try{
        const result =await ProductRepo.deleteByID(id);
        return result;
    }catch(e){
        throw e;
    }
}

exports.getMaxID = async() =>{
    try{
        const result =await ProductRepo.getMaxID();
        return result;
    }catch(e){
        throw e;
    }
}

exports.create = async(product) =>{
    try{
        const result =await ProductRepo.create(product);
        return result;
    }catch(e){
        throw e;
    }
}

exports.getByID = async(id) =>{
    try{
        const result =await ProductRepo.getByID(id);
        return result;
    }catch(e){
        throw e;
    }
}

exports.updateByID = async(product) =>{
    try{
        const result =await ProductRepo.updateByID(product);
        return result;
    }catch(e){
        throw e;
    }
}

exports.isExisted = async(id) =>{
    try{
        const result =await ProductRepo.isExisted(id);
        return result;
    }catch(e){
        throw e;
    }
}


/* `````````````````````````````````` */