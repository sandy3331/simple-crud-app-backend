const express=require("express");
const Product=require("../models/product.model.js");
const router=express.Router();//Router() Function. The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests
const {getProducts,getProductId,createProduct,updateProduct,deleteProduct}=require('../controller/product.controller.js');  //calling the functions

router.get("/",getProducts);

router.get("/:id",getProductId);

router.post("/",createProduct);

router.post("/:id",updateProduct);

router.delete("/:id",deleteProduct);

module.exports=router;