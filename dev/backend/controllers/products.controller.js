const mongoose = require('mongoose')

const ProductModel = require("../models/Product")
const GenderModel = require("../models/Gender")
const BrandModel = require("../models/Brand")
const CategoryModel = require("../models/Category");

exports.create = async (req,res) => {
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
}

exports.delete = async (req, res) => {
    try{
        const id = req.params.id;
        const productDoc = await ProductModel.findById(id);
        if(!productDoc){
            res.status(404).send({
                message: `Product does not exist in database`
            });
        }
        const brandDoc = await BrandModel.findById(productDoc.brandId);
        const genderDoc = await GenderModel.findById(productDoc.gender);
        const categoryDocs = [];

        for(i=0; i<productDoc.categories.length; i++){
            const category = productDoc.categories[i];
            const categoryDoc =  await CategoryModel.findById(category);
            console.log("Category: " + category);
            categoryDocs.push(categoryDoc);
        }

        genderDocProdIndex = genderDoc.products.indexOf(id);
        brandDocProdIndex = brandDoc.products.indexOf(id);
        for(i=0; i<productDoc.categories.length; i++){
            const categoryDoc = categoryDocs[i];
            // console.log("category doc: "+ categoryDoc.products);
            categoryDocProdIndex = categoryDoc.products.indexOf(id);
            if(categoryDocProdIndex > -1){
                categoryDoc.products.splice(categoryDocProdIndex,1);
            }
            await categoryDoc.save();
        }
        
        if(genderDocProdIndex > -1){
            genderDoc.products.splice(genderDocProdIndex,1);
            await genderDoc.save()
        }
        if(brandDocProdIndex > -1){
            brandDoc.products.splice(brandDocProdIndex,1);
            await brandDoc.save()
        }

        const data = await ProductModel.findOneAndDelete({_id : id});
        
        if(!data){
            res.status(404).send({
                message: ` Cannot delete product with id=${id}. Maybe product was not found`
            });
        }else{
            res.status(200).send({
                message: `Product was successfully deleted`
            })
        }

    }catch(e){
        console.log(e);
        res.json({error : e});
    }
}

const getProductIds = async (collectionModel, documentIds)=>{
    try{
        let productIds = await collectionModel.aggregate([
            {
                $match: {_id :{ $in: documentIds} }
            },
            {
                $group:{_id:0,productsArr:{$push:"$products"}}
            },
            {
                $project:{
                    _id:0,
                    ids:{
                        $reduce:{
                            input:"$productsArr",
                            initialValue:[],
                            in:{$setUnion:["$$value", "$$this"]}
                        },
                    }
                }
            },
            {
                $project:{
                    _id:0,
                    idsAsString:{
                        $map:{
                            input:"$ids",
                            as:"tempId",
                            in: {$toString :"$$tempId"}
                        }
                    }
                }

            }
        ])
        // console.log(productIds)
        productIds=productIds[0].idsAsString;

        return productIds;
    }catch(e){
        console.log(e)
        return -1;
    }
}

exports.fetch = async(req,res)=>{
    try{
        // console.log(req.query);
        queryParams = req.query

        //For gender
        let genderProductIds
        let genderIds = []
        if("gender" in queryParams){
            if(!Array.isArray(queryParams.gender)){
                genderIds.push(queryParams.gender)
            }else{
                genderIds=queryParams.gender;
            }
            genderIds = genderIds.map(function(el) { return mongoose.Types.ObjectId(el) })
            genderProductIds= await getProductIds(GenderModel,genderIds);
            if(genderProductIds===-1){
                res.status(500)
                console.log({err:e});
            }
            if(genderProductIds.length==0){
                res.json([]);
                return;
            }
        }

        //For brands
        let brandProductIds
        let brandIds =[]
        if("brands" in queryParams){
            if(!Array.isArray(queryParams.brands)){
                brandIds.push(queryParams.brands)
            }else{
                brandIds=queryParams.brands
            }
            brandIds = brandIds.map(function(el) { return mongoose.Types.ObjectId(el) })
            brandProductIds= await getProductIds(BrandModel,brandIds);
            if(brandProductIds===-1){
                res.status(500)
                console.log({err:e});
            }
            if(brandProductIds.length==0){
                res.json([]);
                return;
            }
        }
        

        //For material
        let materialProductIds
        let materialIds =[]
        if("materials" in queryParams){
            if(!Array.isArray(queryParams.materials)){
                materialIds.push(queryParams.materials)
            }else{
                materialIds=queryParams.materials
            }
            materialIds = materialIds.map(function(el) { return mongoose.Types.ObjectId(el) })
            materialProductIds= await getProductIds(CategoryModel,materialIds);
            if(materialProductIds===-1){
                res.status(500)
                console.log({err:e});
            }
            if(materialProductIds.length==0){
                res.json([]);
                return;
            }
        }


        //For style
        let styleProductIds
        let styleIds = []
        if("styles" in queryParams){
            if(!Array.isArray(queryParams.styles)){
                styleIds.push(queryParams.styles)
            }else{
                styleIds=queryParams.styles
            }
            styleIds = styleIds.map(function(el) { return mongoose.Types.ObjectId(el) })
            styleProductIds= await getProductIds(CategoryModel,styleIds);
            if(styleProductIds===-1){
                res.status(500)
                console.log({err:e});
            }
            if(styleProductIds.length==0){
                res.json([]);
                return;
            }
        }

        //For ocassion
        let occasionProductIds
        let occasionIds = []
        if("occasion" in queryParams){
            if(!Array.isArray(queryParams.occasion)){
                occasionIds.push(queryParams.occasion)
            }else{
                occasionIds=queryParams.occasion
            }
            occasionIds = occasionIds.map(function(el) { return mongoose.Types.ObjectId(el) })
            occasionProductIds= await getProductIds(CategoryModel,occasionIds);
            if(occasionProductIds===-1){
                res.status(500)
                console.log({err:e});
            }
            if(occasionProductIds.length==0){
                res.json([]);
                return;
            }
        }

        let productIds = genderProductIds

        // console.log(productIds)
        // console.log(brandProductIds)
        if(brandProductIds != undefined ){
            productIds = productIds.filter( x => brandProductIds.includes(x));
        }

        if(materialProductIds != undefined){
            productIds = productIds.filter(x => materialProductIds.includes(x));
        }
        // console.log(styleProductIds)
        if(styleProductIds != undefined){
            productIds = productIds.filter(x => styleProductIds.includes(x));
        }

        if(occasionProductIds != undefined){
            productIds = productIds.filter(x => occasionProductIds.includes(x));
        }

        // console.log(productIds)

        const products = await ProductModel.find({_id:{$in:productIds}})
        const result =[]
        for(i=0;i<products.length;i++){
            brandId = products[i].brandId;
            brandDoc = await BrandModel.find({_id:brandId})
            brandName = brandDoc.name;
            product = {
                productId : products[i]._id,
                smallImgTile : products[i].sizes[0].colors[0].productDetail.smallImgTile,
                productName : products[i].name,
                brandId : brandId,
                brandName :brandName,
                price : products[i].sizes[0].colors[0].productDetail.price,
            }
            result.push(product);
        }
        res.json(result);

    }catch(e){
        res.status(500)
        console.log({err:e});
    }
}

exports.fetchSingle = async (req, res)=>{
    try{
        // console.log(req)
        const productId = req.params.id
        
        const product = await ProductModel.findById(productId)
        res.json(product)
    }
    catch(e){
        console.log(e)
    }
}