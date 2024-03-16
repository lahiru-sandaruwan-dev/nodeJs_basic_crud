const mongoose = require("mongoose");

const URL = process.env.MONGO_DB_URL
const connection = () => {
    mongoose.connect(URL)
        .then(() => {
            console.log("DATABASE CONNECTED...!")
        })
        .catch((e) => {
            console.log(`DATABASE CONNECTED ERROR..! ${e}`)
        })
}

module.exports = connection
