const mongoose = require("mongoose");

const genderSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:[mongoose.SchemaTypes.ObjectId]
},{collection:"genders"})

module.exports = mongoose.model("GenderModel",genderSchema);