const express = require('express')

const router = express.Router()

const authController = require("../controllers/auth.controller.js")

router.route("/login")
.post(authController.login)

router.route("/signup")
.post(authController.signup)

module.exports=router