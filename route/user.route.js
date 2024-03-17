const express = require("express")
const UserController = require("../controller/user.controller")

const UserRouter = express.Router()

UserRouter.post("/register", UserController.UserRegister) 
UserRouter.post("/userLogin", UserController.UserLogin)

module.exports = UserRouter