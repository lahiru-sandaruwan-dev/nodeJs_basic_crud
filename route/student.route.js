const express = require("express");
const Student = require("../model/student.model");
const Response = require("../utils/response");
const studentController = require("../controller/student.controller")

const StudentRouter = express.Router()

StudentRouter.get("/getAll", studentController.GetAllStudents);

StudentRouter.get("/get-student/:id", studentController.GetStudentById)

StudentRouter.post("/register", studentController.SaveStudent)

StudentRouter.put("/update-student/:id", studentController.UpdateStudent)

StudentRouter.delete("/delete-student/:id", studentController.DeleteStudent)



module.exports = StudentRouter