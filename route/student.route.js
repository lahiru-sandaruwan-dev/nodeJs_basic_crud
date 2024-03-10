const express = require("express");
const Student = require("../model/student.model");
const Response = require("../utils/response");

const StudentRouter = express.Router()

StudentRouter.get("/getStudent", (req, res) => {
    return res.send({
        message: "Student Router Working Without Error!"
    });
});


StudentRouter.post("/register", async (req, res) => {
    const body = req.body

    // const newStudent = new Student(body)
    // const createdUser = await newStudent.save()

    const createdUser = await Student.create(body)

    if (createdUser) {
        // return res.status(201).send({
        //     isSuccessful: true,
        //     code: 201,
        //     message: "User Created Successful!",
        //     data: createdUser
        // })

        return Response(res, 201, true, "User Created..!", createdUser)
    } else {
        // return res.status(500).send({
        //     isSuccessful: false,
        //     code: 500,
        //     message: "Fail to Create User!",
        //     data: []
        // })

        return Response(res, 500, false, "Fail to Create User!", createdUser)
    }

    console.log("createdUser", createdUser)
})


module.exports = StudentRouter