const bcrypt = require("bcrypt")

const SALT = process.env.GEN_SALT

const getEncryptedPassword = async (password) => {
    const salt = await bcrypt.genSalt(Number(SALT))
    return await bcrypt.hash(password, salt)
}

const comparePassword = async (password, encryptedPassword)=>{
    return await bcrypt.compare(password, encryptedPassword)
}

module.exports = {
    getEncryptedPassword,
    comparePassword
}