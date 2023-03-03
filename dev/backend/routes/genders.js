const express = require("express")

const router = express.Router()

const genderController = require("../controllers/genders.controller.js");

//Get all genders
router.route('/').get(genderController.fetchAll);

module.exports=router 