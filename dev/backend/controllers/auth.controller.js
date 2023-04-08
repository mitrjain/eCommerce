const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const fs = require("fs")
const base64url = require('base64url')

require('dotenv/config');
// const saltRounds = process.env.SALT_ROUNDS
const saltRounds = 10

const UserModel = require("../models/User");

const validPwd = async (pwdPlainText,pwdHash)=>{
    isValid =  await bcrypt.compare(pwdPlainText,pwdHash)
    return isValid
}

const generateTokens = async(userId)=>{
    try{
        accessToken = await generateToken("access",userId)
        refreshToken = await generateToken("refresh",userId)
    }catch(e){
        console.log(e)
        return e,e
    }
    return accessToken, refreshToken
}

const generateToken = async(type, userId) => {
    var privateKey  = fs.readFileSync("/Users/spartan/Desktop/SJSU_Spring_23/CS_161/eCommerce/dev/backend/serverSigningKey", 'utf8');
    if(type == "access"){
        exp = Math.floor( (Date.now() / 1000 ) + (1 * 60) ) //Access token expiry 1/2hr
    }
    else if(type == "refresh"){
        exp = Math.floor( (Date.now() / 1000) + (120 * 60) ) //Refresh token expiry 2hrs
    }

    payload = {
        type:type,
        iat: Math.floor(Date.now() / 1000),
    }
    var options = {
        issuer: "Gladdiators",
        subject: userId,
        expiresIn:exp
    }
    try{
        var token = await jwt.sign(payload, privateKey, options)
        // console.log("Token - " + token)
    }catch(e){
        console.log(e)
        return null
    }

    return token
}

const verifyToken = (token) => {
    var publicKey  = fs.readFileSync("/Users/spartan/Desktop/SJSU_Spring_23/CS_161/eCommerce/dev/backend/serverSigningKey", 'utf8');
    try{
        payload = jwt.verify(token,publicKey)
        if(payload instanceof Error){
            return false
        }else{
            return true
        }   
    }catch(e){
        console.log(e)
        return false
    }
}

exports.loginWithToken = async (req,res) =>{
    //using refresh token

    refreshToken = req.body.token

    //Check if token is issued by Gladiators
    isIssuedByUs = verifyToken(refreshToken);
    if(!isIssuedByUs){
        res.status(401)
        res.json("Invalid refresh token")
        return;
    }

    decodedPayload = base64url.decode(refreshToken.split(".")[1])
    payload = JSON.parse(decodedPayload)
    exp = payload.exp
    userId = payload.sub

    //Check 2: check if token is not expired
    currTimestamp = Math.floor(Date.now()/1000)
    if(exp <= currTimestamp){
        res.status(401)
        res.json("Refresh token has expired")
        return;
    }

    //Check 3: check if user exists in database
    try{
        userDoc = await UserModel.findById(userId)
        if(!userDoc){
            res.status(401).json({
                message: `Invalid refresh token.`
            });
            return
        }
    
    //Check 4: check if last activity of this user was within 30 mins from now
        lastActiveTimestamp = userDoc.lastActiveAt

        if( currTimestamp-lastActiveTimestamp <= (30*60)){
            res.status(401).json({
                message: `User session expired.`
            });
            return
        }

    }
    catch(e){
        console.log(e)
        res.status(401).send({
            message: `Internal server error.`
        });
    }

    // Generate fresh tokens
    accessToken, refreshToken = generateTokens(userDoc._id.toString());

    //Update tokens in user object in db
    try{
        userDoc.tokens={
            access:accessToken,
            refresh:refreshToken
        }
        await userDoc.save()
    }catch(e){
        console.log(e)
        res.status(401).send({
            message: `Internal server error.`
        });
    }

    res.json({
        accessToken:accessToken,
        refreshToken:refreshToken
    })
}

exports.loginWithCredentials = async (req,res) =>{
    //check if username exists
    userEmail = req.body.email
    userPwd = req.body.pwd
    // console.log(req.body)

    try{
        userDoc = await UserModel.findOne({email:userEmail})
        if(!userDoc){
            res.status(401).send({
                message: `User with email ${userEmail} doesn't exist.`
            });
        }

        //Check if password is valid
        isValid = await validPwd(userPwd,userDoc.pwdHash);

        if(isValid == true){
            createNewTokens = false;

            //Check if there is a pre-exisiting access token
            if("tokens" in userDoc){

                //Check if access token is not expired
                accessToken = userDoc.tokens.access
                decodedPayload = base64url.decode(accessToken.split(".")[1])
                payload = JSON.parse(decodedPayload)
                exp = payload.exp

                currTimestamp = Math.floor(Date.now()/1000)
                if(exp <= currTimestamp){
                    //access token is expired have to create new ones
                    createNewTokens=true
                }else{
                    //access token is not expired and hence can be reused
                    tokens = {
                        accessToken:userDoc.tokens.access,
                        refreshToken:userDoc.tokens.refresh
                    }
                }
            }else{
                createNewTokens = true
            }

            if(createNewTokens){
                //access token either never created or expired

                accessToken, refreshToken = await generateTokens(userDoc._id.toString())
                
                if(accessToken == null || refreshToken == null || accessToken instanceof Error || refreshToken instanceof Error ){
                    throw new Error("Unable to create token")
                }

                tokens = {
                    accessToken:accessToken,
                    refreshToken:refreshToken
                }

                // save/update the newly created tokens in user document in mongo DB
                userDoc.tokens = {
                    access:accessToken,
                    refresh:refreshToken
                }
                await userDoc.save()
            }

            res.json(tokens)
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
        // console.log(pwdHash)

        userDoc = new UserModel({
            name:{
                first:firstName,
                last:lastName
            },
            email: userEmail,
            pwdHash: pwdHash,
            createdAt: Math.floor(Date.now() / 1000),
            lastActiveAt: Math.floor(Date.now() / 1000)
        })

        const savedUserDoc = await userDoc.save();

        accessToken, refreshToken = await generateTokens(savedUserDoc._id.toString())
        
        if(accessToken == null || refreshToken == null || accessToken instanceof Error || refreshToken instanceof Error){
            throw new Error("Unable to create token")
        }

        tokens = {
            access:accessToken,
            refresh:refreshToken
        }
        savedUserDoc.tokens = tokens

        await savedUserDoc.save()

        res.status(201).send({
            accessToken:accessToken,
            refreshToken:refreshToken
        })
    }
    catch(e){
        console.log(e)
        res.status(401).send({
            message: `Internal server error.`
        });
    }

}