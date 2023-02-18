const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    motto:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    about:{
        type:String
    }

});

module.exports=mongoose.model('BrandModel',brandSchema);