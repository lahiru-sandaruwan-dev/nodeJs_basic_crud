const Response = (res, statusCode, isSuccessful, message, data) => {
    return res.status(statusCode).send(
        {
            isSuccessful: isSuccessful,
            code: statusCode,
            timeStamps: new Date().toISOString(),
            message: message,
            data: data
        }
    )
    console.log("Data", data)
}

module.exports = Response