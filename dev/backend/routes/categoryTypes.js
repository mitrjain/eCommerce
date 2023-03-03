const express = require("express")

const router = express.Router()

const categoryTypesController = require("../controllers/categoryTypes.controller.js");

//Get all categoryTypes and its sub categories
router.route('/').get(categoryTypesController.fetchAll);

module.exports=router 