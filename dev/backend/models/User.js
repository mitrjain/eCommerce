const mongoose = require('mongoose')
require('mongoose-type-email')

const addressSchema = mongoose.Schema({
    line1:{
        type:String,
        required:true
    },
    line2:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String, 
        required:true,
    },
    postalCode:{
        type:Number,
        required:true
    }
})

const nameSchema = mongoose.Schema({
    first:{
        type:String,
        required:true
    },
    last:{
        type:String,
        required:true
    }
})

const cardSchema = mongoose.Schema({
    nameOnCard:{
        type:String,
        required:true
    },
    cardNum:{
        type:String,
        required:true
    },
    expiryMonth:{
        type:Number,
        required:true
    },
    expiryYear:{
        type:Number,
        required:true
    },
    cvv:{
        type:Number,
        required:false
    }
})

const tokenSchema = mongoose.Schema({
    access:{
        type:String,
        required:true
    },
    refresh:{
        type:String,
        required:true
    }
})

const userSchema = mongoose.Schema({
    addresses:{
        type:[addressSchema],
        required:false
    },
    name:nameSchema,
    email:{
        type:mongoose.SchemaTypes.Email,
        required:true
    },
    pwdHash:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:false
    },
    createdAt:{
        type:String,
        required:true
    },
    lastActiveAt:{
        type:String,
        required:false
    },
    cart:{
        type:mongoose.SchemaTypes.ObjectId,
        required:false
    },
    wishlist:{
        type:mongoose.SchemaTypes.ObjectId,
        required:false
    },
    cards:{
        type:[cardSchema],
        required:false
    },
    tokens:{
        type:tokenSchema,
        required:false
    }
},
{collection:"users"})

module.exports=mongoose.model('UserModel',userSchema)