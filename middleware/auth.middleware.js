const UnauthorizedError = require("../errors/error.classes/UnauthorizedError")
const helperUtil = require("../utils/helper.util")

const authorize = (roleArray) => {
    if (!roleArray) {
        roleArray = []
    }

    return (req, res, next) => {
        const authHeader = req.headers.authorization

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            throw new UnauthorizedError("Authentication Invalid!")
        }

        const token = helperUtil.extractToken(authHeader)

        console.log(token)

        if(token){

        } else {
            
        }
    }
}

module.exports = {
    authorize
}