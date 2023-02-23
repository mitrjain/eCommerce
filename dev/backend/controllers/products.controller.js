
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
