const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
// app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5000
const URL = process.env.MONGO_DB_URL

//import routes
const StudentRouter = require("./route/student.route")

//use routes
app.use("/api/student", StudentRouter)

mongoose.set("strictQuery", true)

const connection = () => {
    mongoose.connect(URL)
        .then(() => {
            console.log("DATABASE CONNECTED...!")
        })
        .catch((e) => {
            console.log(`DATABASE CONNECTED ERROR..! ${e}`)
        })
}

app.listen(PORT, () => {
    console.log(`SERVER LISTEN ON PORT ${PORT}..!`)
    connection()
})