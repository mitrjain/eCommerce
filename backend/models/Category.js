const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:[
        mongoose.SchemaTypes.ObjectId
    ],
    categoryType:{
        type:mongoose.SchemaTypes.ObjectId
    }

},{collection:"categories"})

module.exports=mongoose.model('CategoryModel',categorySchema)