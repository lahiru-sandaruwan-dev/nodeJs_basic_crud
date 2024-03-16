const express = require("express")
const UserRegister = require("../controller/user.controller")

const UserRouter = express.Router()

UserRouter.post("/register", UserRegister) 

module.exports = UserRouter