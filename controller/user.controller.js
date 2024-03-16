const helperUtil = require("../utils/helper.util")
const UserService = require("../service/user.service")
const User = require("../model/user.model")
const { StatusCodes } = require("http-status-codes")
const NotFoundError = require("../errors/error.classes/NotFoundError")
const BadRequestError = require("../errors/error.classes/BadRequestError")
const Response = require("../utils/response")

const UserRegister = async (req, res) => {
    const body = req.body
    const newUser = new User(body)

    const isUserExist = await UserService.findByEmail(body.email)

    if (isUserExist) {
        throw new BadRequestError("Email Already Exist!")
    }

    const passwordHash = await helperUtil.getEncryptedPassword(body.password)

    newUser.password = passwordHash

    try {
        const createdUser = await UserService.SaveUser(newUser)

        return Response(res, StatusCodes.CREATED, true, "User Created Successful!", createdUser);
        // console.log(newUser)


    } catch (error) {
        console.log(error)
        throw error
    }

    // throw new NotFoundError("User Not Found")
    // console.log(newUser)
}

module.exports = {
    UserRegister
}