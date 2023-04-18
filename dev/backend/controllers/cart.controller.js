const mongoose = require('mongoose')
const axios = require('axios')

const CartModel = require('../models/Cart');

exports.create = async (req, res) => {
    try{
        let key = req.body.brandId + req.body.productId + req.body.genderId + req.body.size + req.body.color + req.body.sellerId + req.body.price;
        const cartDocTemp = await CartModel.find({cartkey : key});
        const cardDoc = await CartModel.findOneAndDelete({cartKey : key});
        if(!cartDocTemp){
            console.log("ENtered here");
            console.log(cardDoc);
            res.json({message: "error due to cart already present"})
        }
        req.body.cartKey = key;
        const cart = new CartModel(req.body);
        let savedCart;
        if(req.body.qty > 0){
            savedCart = await cart.save();
        }
        // const getCartsUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        // axios.get(getCartsUrl)
        //     .then(resp => {
        //         // console.log(resp.data);
        //         res.status(201).json(resp.data);
        //     })
        //     .catch(err => {
        //         res.status(404).json({message : 'Error using axios to fetch cart elements'})
        //         console.log(error);
        //     })

        res.status(201).json(savedCart);
    }catch(e){
        console.log(e);
        res.json({error:e})
    }
}

exports.findAll = async (req, res) => {
    try{
        const cartElements = await CartModel.find({});
        if(!cartElements){
            res.status(200).send({
                message : 'No cart elements found'
            });
        }else{
            const result = []
            for(i=0; i<cartElements.length; i++){
                result.push(cartElements[i]);
            }
            res.status(200).json(result);
        }
    }catch(e){
        console.log(e)
        res.json({error : e})
    }
}
//Cart module key definition
//key = productId + brandId + genderId + size + color + price