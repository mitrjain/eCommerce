const CategoryTypeModel = require('../models/CategoryType');
const CategoryModel = require('../models/Category');

exports.fetchAll = async (req, res) => {
    try{
        const categoryTypes = await CategoryTypeModel.find({})
        if(!categoryTypes){
            res.status(200).send({
                message: `No categories found`
            })
        }else{
            const result =[]
            for(i=0;i<categoryTypes.length;i++){

                // categoriesArr = []
                // categories=categoryTypes[i].categories;
                // console.log(categories);
                // for( j=0;j<categories.length;j++){
                //     categoryDoc = await CategoryModel.findById(categories[j]);
                //     // console.log(categoryDoc)
                //     categoryObj = {
                //         categoryId : categoryDoc._id,
                //         name : categoryDoc.name
                //     }
                //     categoriesArr.push(categoryObj);
                // }
                categoryTypeObj = {
                    categoryTypeId : categoryTypes[i]._id,
                    name : categoryTypes[i].name,
                    // categories : categoriesArr
                }
                result.push(categoryTypeObj);
            }
            res.json(result)
        }
    }catch(e){
        res.status(500)
        console.log(e);
        res.json({error : e});
    }
}

exports.fetchSingle = async (req, res) => {
    try{
        const categoryTypeId = req.params.id;
        const categoryTypeDoc = await CategoryTypeModel.findById(categoryTypeId);
        if(!categoryTypeDoc){
            res.status(200).send({
                message: `No categoryType found matching the provided id`
            })
        }else{
            const result =[]
            categories=categoryTypeDoc.categories;
            for( j=0;j<categories.length;j++){
                categoryDoc = await CategoryModel.findById(categories[j]);
                categoryObj = {
                    categoryId : categoryDoc._id,
                    name : categoryDoc.name
                }
                result.push(categoryObj);

            }
            res.json(result)
        }
    }catch(e){
        res.status(500)
        console.log(e);
        res.json({error : e});
    }
}