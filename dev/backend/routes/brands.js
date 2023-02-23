const express = require("express")

const router = express.Router()

const brandController = require("../controllers/brands.controller.js");

//Get all brands
router.route('/').get(brandController.findAll);

module.exports=router 