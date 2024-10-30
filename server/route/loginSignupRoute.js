 const { getUser, createUser } = require("../controller/loginSignupController")
 const express = require("express")
 const router= express.Router();

 //login route
 router.post("/login", getUser)

 //signup route
 router.post("/signup", createUser)


 module.exports = router