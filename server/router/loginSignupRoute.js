 const { loginUser, createUser } = require("../controller/loginSignupController")
 const express = require("express")
 const router= express.Router();
 const verifyToken = require('../services/jwtMiddleware')
 //login route
 router.post("/login", loginUser)

 //signup route
 router.post("/signup", createUser)


 module.exports = router