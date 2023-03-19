

const BrandModel = require('../models/Brand');

exports.findAll = async (req, res) => {
    try{
        const data = await BrandModel.find({});
        if(!data){
            res.status(200).send({
                message: `No Brands found`
            })
        }else{


            const result =[]
            for(i=0;i<data.length;i++){

                brands = []

                brandTypeObj = {
                    brandId : data[i]._id,
                    name : data[i].name
                }
                result.push(brandTypeObj);
            }
            res.json(result)
        }
    }catch(e){
        console.log(e);
        res.json({error : e});
    }
}