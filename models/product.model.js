const mongoose=require('mongoose');  //importing mongoose framework

//creating a model of the metadata that a sample product will be having
const ProductSchema=mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"pls enter name of product"],
        },

        quantity:{
            type: Number,
            required: true,
            default:0
        },

        price:{
            type:Number,
            required:true,
            default:0
        },

        image:{
            type:String,
            required:false
        },
    },
    {
        timestamps: true    //2 more extra fields when created and when updated.....
    }
);

//converting schema into model
const Product= mongoose.model("Product",ProductSchema);

//exporting this model so that we can use it in index.js file
module.exports= Product;