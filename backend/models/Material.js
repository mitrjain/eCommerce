const mongoose = require("mongoose")

const materialSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:[mongoose.SchemaTypes.ObjectId]
},{collection:"materials"});

module.exports = mongoose.model("MaterialModel", materialSchema)