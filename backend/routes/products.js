const express = require("express")
const router = express.Router()

const ProductModel = require("../models/Product")
const GenderModel = require("../models/Gender")
const BrandModel = require("../models/Brand")
const CategoryModel = require("../models/Category");

router.route("/")
.post( async(req,res)=>{
    try{
        const product = new ProductModel(
            req.body
        );

        const savedProduct = await product.save();
        
        const genderDoc = await GenderModel.findById(req.body.gender);
        genderDoc.products.push(product.id);
        await genderDoc.save();

        const brandDoc = await BrandModel.findById(req.body.brandId);
        brandDoc.products.push(product.id);
        await brandDoc.save();

        req.body.categories.forEach(async element => {
            const categoryDoc = await CategoryModel.findById(element);
            categoryDoc.products.push(product.id);
            await categoryDoc.save();
        });

        res.status(201);
        res.json(savedProduct);
    }
    catch (e){
        console.log(e);
        res.json({error:e})
    }
})

module.exports=router