const express = require('express')

const router = express.Router()

const authController = require("../controllers/auth.controller.js")

router.route("/login/creds")
.post(authController.loginWithCredentials)

router.route("/login/token")
.post(authController.loginWithToken)

router.route("/signup")
.post(authController.signup)

module.exports=router