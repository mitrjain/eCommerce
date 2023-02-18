const mongoose = require("mongoose");

const genderSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:[mongoose.SchemaTypes.ObjectId]
})

module.exports = mongoose.model("GenderModel",genderSchema);