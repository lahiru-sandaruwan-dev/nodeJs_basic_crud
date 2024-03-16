const express = require("express")
const UserRegister = require("../controller/user.controller")

const UserRouter = express.Router()

UserRouter.post("/register", UserRegister.UserRegister) 

module.exports = UserRouter