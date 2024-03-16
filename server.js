const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const cors = require("cors")
const Constant = require("./constants")
const connection = require("./utils/connection")

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 4000
// const URL = process.env.MONGO_DB_URL

//import routes
const StudentRouter = require("./route/student.route")
const UserRouter = require("./route/user.route")

//use routes
app.use(Constant.API.PREFIX.concat("/student"), StudentRouter)
app.use(Constant.API.PREFIX.concat("/user"), UserRouter)

mongoose.set("strictQuery", true)

app.listen(PORT, () => {
    console.log(`SERVER LISTEN ON PORT ${PORT}..!`)
    connection()
})