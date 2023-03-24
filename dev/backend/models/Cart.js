const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    brandId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    sellerId:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    smallImgTile:{
        type:String,
        required:true
    },
    gender:{
        type:mongoose.SchemaTypes.ObjectId
    },
    cartKey:{
        type:String,
        required:true
    }

},{collection:"cart"})

module.exports=mongoose.model('CartModel',cartSchema)