const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    smallImgTile:{
        type:String,
        required:true
    },
    products:[
        mongoose.SchemaTypes.ObjectId
    ]
})

module.exports=mongoose.model('CategoryModel',categorySchema)