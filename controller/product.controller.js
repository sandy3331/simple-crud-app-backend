const Product=require('../models/product.model.js')

const getProducts=async(req,res)=>{
    try{
        const products=await Product.find({});  //while using await as the function waits for the Product data we are supposed to give async for the (req,res)
        res.status(200).json(products);         //using find so as to fetch any product details that are present in database.
    } catch (error){
        res.status(500).json({message:error.message});
    }
}

const getProductId=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);  //using findById to fetch the product details based on the id provided
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const createProduct=async(req,res)=>{
    try{
        const product= await Product.create(req.body); //using create so as to submit the data necessary for the product
        res.status(200).json(product);
    }catch (error){
         res.status(500).json({message:error.message});
    };
}

const updateProduct=async(req,res)=>{
    try{ 
        const {id}=req.params;  //creating a id object which comes as a parameter
        const productid=await Product.findByIdAndUpdate(id,req.body); //It finds the prdct by id and updates it

        if(!productid){  //if at allproduct is not found
            return res.status(404).json({message:"product not found"});
        }

        const UpdatedProduct=await Product.findById(id); //just to be sure the updated product is returend with id
        res.status(200).json(UpdatedProduct);
    }catch(error){
        res.status(500).json({message:error.message});
    };
}

const deleteProduct=async(req,res)=>{
    try{

        const {id}=req.params;
        const productid=await Product.findByIdAndDelete(id);
        
        if(!productid)
        {
            return res.status(404).json({message:"Product not found"});
        }

        res.status(200).json({message:"Product deleted successfully"});

    }catch(error){
        res.status(500).json({message:error.message});
    };
}

module.exports={
     getProducts,
     getProductId,
     createProduct,
     updateProduct,
     deleteProduct
};