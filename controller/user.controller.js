const helperUtil = require("../utils/helper.util")
const UserService = require("../service/user.service")
const User = require("../model/user.model")

const UserRegister = async (req, res) => {
    const newUser = new User(req.body)

    console.log(newUser)
}

module.exports = UserRegister