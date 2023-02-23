

const BrandModel = require('../models/Brand');

exports.findAll = async (req, res) => {
    try{
        const data = await BrandModel.find({});
        if(!data){
            res.status(200).send({
                message: `No Brands found`
            })
        }else{
            res.status(200).json(data);
        }
    }catch(e){
        console.log(e);
        res.json({error : e});
    }
}