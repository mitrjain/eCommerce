const express = require("express")

const router = express.Router()

const cartController = require("../controllers/cart.controller.js");

//Get all genders
router.route('/').post(cartController.create);
router.route('/').get(cartController.findAll);

module.exports=router 