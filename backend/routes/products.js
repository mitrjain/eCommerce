const express = require("express")
const router = express.Router()

const ProductModel = require("../models/Product")

router.route("/")
.post( async(req,res)=>{
    try{
        console.log(req.body);
        const product = new ProductModel({
            name:req.body.name,
            desc:req.body.desc
        })
        const savedProduct = await product.save();
        res.status(201);
        res.json(savedProduct);
    }
    catch (e){
        console.log(e);
        res.json({error:e})
    }
})

module.exports=router