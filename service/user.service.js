const User = require("../model/user.model")

const SaveUser = async (obj) => {
    return await obj.save()
}

module.exports = {
    SaveUser
}