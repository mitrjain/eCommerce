const mongoose = require('mongoose')

const inventorySchema = mongoose.Schema({
    color:{
        type:String,
        required:true
    },
    productDetail:{
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
        images:{
            type: [String],
            required: true
        }   
    }

})

const sizeSchema = mongoose.Schema({
    size:{
        type:Number,
        required:true
    },
    color:[inventorySchema]
})

const productSchema = mongoose.Schema({
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
    maxQtyLmt:{
        type:Number,
        required:true
    },
    style:{
        type:mongoose.SchemaTypes.ObjectId
    },
    material:{
        type:mongoose.SchemaTypes.ObjectId
    },
    size:[sizeSchema],
    rating:{
        stars:{
            type:Number,
            required:true
        },
        review:{
            type:String
        },
        images:{
            type: [String]
        }  

    },
    gender:{
        type:mongoose.SchemaTypes.ObjectId
    }

    
},{collection:"products"})

module.exports=mongoose.model('ProductModel',productSchema)