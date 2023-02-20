const mongoose = require("mongoose")

const categoryTypeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true        
    },
    smallImgTile:{
        type:String
    },
    categories :[ mongoose.SchemaTypes.ObjectId ]

},{collection:"categoryTypes"})