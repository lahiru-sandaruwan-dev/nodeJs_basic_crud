const User = require("../model/user.model")

const SaveUser = async (obj) => {
    return await obj.save()
}

const findByEmail = async (email) => {
    return await User.findOne({
        email: email
    })
}

module.exports = {
    SaveUser,
    findByEmail
}