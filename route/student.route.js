const express = require("express")
const StudentRouter = express.Router()

StudentRouter.get("/getStudent", (req, res) => {
    return res.send({
        message: "Student Router Working Without Error!"
    });
});

module.exports = StudentRouter