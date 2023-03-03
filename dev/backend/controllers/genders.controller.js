const GenderModel = require('../models/Gender');

exports.fetchAll = async (req, res) => {
    try{
        const genders = await GenderModel.find({});
        if(!genders){
            res.status(200).send({
                message: `No Genders found`
            })
        }else{
            const result =[]
            for(i=0;i<genders.length;i++){
                gender = {
                    name:genders[i].name,
                    genderId:genders[i]._id
                }
                result.push(gender);
            }
            res.json(result)
        }
    }catch(e){
        res.status(500)
        console.log(e);
        res.json({error : e});
    }
}