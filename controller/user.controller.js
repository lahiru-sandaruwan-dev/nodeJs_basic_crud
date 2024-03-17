const helperUtil = require("../utils/helper.util")
const UserService = require("../service/user.service")
const User = require("../model/user.model")
const { StatusCodes } = require("http-status-codes")
const NotFoundError = require("../errors/error.classes/NotFoundError")
const BadRequestError = require("../errors/error.classes/BadRequestError")
const Response = require("../utils/response")
const UnauthorizedError = require("../errors/error.classes/UnauthorizedError")

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

    } catch (error) {
        throw error
    }

}

const UserLogin = async (req, res) => {
    let credentials = req.body

    const user = await UserService.findByEmail(credentials.email)

    if(!user) throw new NotFoundError("Invalid Email Address!")

    const isPasswordMatch = await helperUtil.comparePassword(credentials.password, user.password)

    if(!isPasswordMatch) throw new UnauthorizedError("Incorrect Password!")

    let payload = {
        id: user._id,
        role: user.role
    }

    const token = helperUtil.signToken(payload)

    return Response(res, StatusCodes.OK, true, "Login Successful!", {token})

    // if(user){
    //     const isPasswordMatch = await helperUtil.comparePassword(credentials.password, user.password)
    //     if(isPasswordMatch){
    //     } else {
    //         throw new UnauthorizedError("Incorrect Password!")
    //     }
    //     console.log(isPasswordMatch)
    // } else {
    //     throw new NotFoundError("Invalid Email Address!")
    // }
    // console.log(user)
}

module.exports = {
    UserRegister,
    UserLogin
}