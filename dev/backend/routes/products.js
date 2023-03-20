const express = require("express")
const router = express.Router()

const productsController = require("../controllers/products.controller.js");


router.route('/')
.post(productsController.create) //create a new product
.get(productsController.fetch) //get product listing

router.route('/:id')
.delete(productsController.delete) //delete a product

router.route(':/id')
.get(productsController.fetchSingleProduct) //get a single product specified by id


module.exports=router