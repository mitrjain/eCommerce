const mongoose = require("mongoose")

const footwearTypeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:[mongoose.SchemaTypes.ObjectId]
});

module.exports = mongoose.model("FootwearModel", footwearTypeSchema)