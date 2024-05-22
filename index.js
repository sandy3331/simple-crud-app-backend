const express=require('express')    //importing express framework
const mongoose=require('mongoose'); //mongoose framework
const Product=require('./models/product.model.js'); //importing the the product.model.js file presentin models folder
const productRoute=require("./routes/product.route.js");//importing the file that contains all the routes of product

const app=express()   //using express framweork by creating a express function

app.use(express.json());  //middleware to configure json files in nodejs
app.use(express.urlencoded({extended:false}));//if we wantto test in insomnia or postman in the form of formurl instead of json ;configuring the same throgh middleware

//routes
app.use('/api/products',productRoute)

app.get("/",(req,res)=>{   //sample get to show how get request works with basic url of general way
   res.send("Hii from node api zuzubiiiii");
});

//in order to view the products that are added
/*app.get('/api/products',async(req,res)=>{
    try{
        const products=await Product.find({});  //while using await as the function waits for the Product data we are supposed to give async for the (req,res)
        res.status(200).json(products);         //using find so as to fetch any product details that are present in database.
    } catch (error){
        res.status(500).json({message:error.message});
    }
});*/

//in order to view each individual product
/*app.get('/api/products/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);  //using findById to fetch the product details based on the id provided
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});*/


//in order to save or create all the data of products created in product model
/*app.post('/api/products',async(req,res)=>{
    try{
        const product= await Product.create(req.body); //using create so as to submit the data necessary for the product
        res.status(200).json(product);
    }catch (error){
         res.status(500).json({message:error.message});
    };
});*/

//update a product based on its id
/*app.put('/api/products/:id',async (req,res)=>{
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
    }
    
});*/

//deleting a product

/*app.delete('/api/products/:id',async(req,res)=>{
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
    }
});*/

//checking the connectn of mongoose 
mongoose.connect('mongodb+srv://125003418:ALAgBduRvQ5a1Abi@cluster0.jeb2alx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("Connected to server!!");
    app.listen(3000,()=>{
        console.log('server is running at 3000 port');
    });
})
.catch(()=>{
    console.log("Connectio failed");
})