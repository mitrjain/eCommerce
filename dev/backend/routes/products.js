const express = require("express")
const router = express.Router()

const productsController = require("../controllers/products.controller.js");

//create a new product
router.route('/')
.post(productsController.create)
.get(productsController.fetch)

//delete a product
router.route('/:id').delete(productsController.delete);


module.exports=router