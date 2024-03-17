const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")

const SALT = process.env.GEN_SALT
const SECRET = process.env.JWT_SECRET

const getEncryptedPassword = async (password) => {
    const salt = await bcrypt.genSalt(Number(SALT))
    return await bcrypt.hash(password, salt)
}

const comparePassword = async (password, encryptedPassword) => {
    return await bcrypt.compare(password, encryptedPassword)
}

const signToken = (obj) => {
    const maxAge = 60 * 60 * 24 * 3 //for 3 days
    return JWT.sign(obj, SECRET, {
        expiresIn: maxAge
    })
}

module.exports = {
    getEncryptedPassword,
    comparePassword,
    signToken
}