const mongoose = require("mongoose")

const footwearTypeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:[mongoose.SchemaTypes.ObjectId]
},{collection:"footwearTypes"});

module.exports = mongoose.model("FootwearModel", footwearTypeSchema)