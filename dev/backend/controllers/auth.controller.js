const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const fs = require("fs")

require('dotenv/config');
// const saltRounds = process.env.SALT_ROUNDS
const saltRounds = 10

const UserModel = require("../models/User");
const { options } = require('../routes/auth');

const validPwd = async (pwdPlainText,pwdHash)=>{
    isValid =  await bcrypt.compare(pwdPlainText,pwdHash)
}

const generateTokens = async(payload, options, privateKey) => {
    try{
        var token = await jwt.sign(payload, privateKey, options)
        console.log("Token - " + token)
    }catch(e){
        console.log(e)
    }

    return token


}


exports.login = async (req,res) =>{
    //check if username exists
    userEmail = req.body.email
    userPwd = req.body.pwd
    console.log(req.body)

    try{
        userDoc = await UserModel.findOne({email:userEmail})
        if(!userDoc){
            res.status(401).send({
                message: `User with email ${userEmail} doesn't exist.`
            });
        }

        isValid = await validPwd(userPwd,userDoc.pwd);

        if(isValid == true){
            //Send Access and Refresh tokens in respone
        }
        else{
            res.status(401).send({
                message: `Invalid user email or password.`
            });
        }

    }
    catch(e){
        console.log(e)
        res.status(401).send({
            message: `Internal server error.`
        });
    }    
}

exports.signup = async(req,res) =>{
    userEmail = req.body.email
    userPwd = req.body.pwd
    firstName = req.body.firstName
    lastName = req.body.lastName
    try{
        userDoc = await UserModel.findOne({email:userEmail})
        if(userDoc){
            res.status(401).send({
                message: `User with email ${userEmail} already exists.`
            });
            return
        }
        pwdHash = await bcrypt.hash(userPwd, saltRounds)
        console.log(pwdHash)

        userDoc = new UserModel({
            name:{
                first:firstName,
                last:lastName
            },
            email: userEmail,
            pwdHash: pwdHash,
            createdAt: Math.floor(Date.now() / 1000)
        })

        const savedUserDoc = await userDoc.save();

        var privateKey  = fs.readFileSync("/Users/spartan/Desktop/SJSU_Spring_23/CS_161/eCommerce/dev/backend/serverSigningKey", 'utf8');

        payload = {
            type:"access",
            iat: Math.floor(Date.now() / 1000),
        }
        var options = {
            issuer: "Gladdiators",
            subject: savedUserDoc._id.toString(),
            expiresIn:Math.floor(Date.now() / 1000) + (60 * 60),
        }

        accessToken = await generateTokens(payload,options,privateKey)
        // refreshToken = await generateTokens(refrshPay)

    }
    catch(e){
        console.log(e)
        res.status(401).send({
            message: `Internal server error.`
        });
    }

}