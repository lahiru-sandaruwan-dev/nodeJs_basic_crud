const Student = require("../model/student.model");
const Response = require("../utils/response");

const GetAllStudents = async (req, res) => {
    const allStudents = await Student.find()
    return Response(res, 200, true, "", allStudents)
}

const GetStudentById = async (req, res) => {
    const studentId = req.params.id

    // const student = await Student.findOne({
    //     _id: studentId
    // })

    // const student = await Student.find({ 
    //     _id: studentId
    // })

    const student = await Student.findById(studentId)

    console.log(student)

    if (student) {
        return Response(res, 200, true, "", student)
    } else {
        return Response(res, 404, false, "Student not found..!", [])
    }
}

const SaveStudent = async (req, res) => {
    const body = req.body

    const isEmailCheck = await Student.find({
        email: body.email
    })

    if (isEmailCheck.length > 0) {
        return Response(res, 400, false, "Email already used..!", [])
    }

    // const newStudent = new Student(body)
    // const createdUser = await newStudent.save()

    const createdUser = await Student.create(body)

    console.log("createdUser", createdUser)

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
}

const UpdateStudent = async (req, res) => {
    const studentId = req.params.id
    const request = req.body
    const student = await Student.findById(studentId)

    console.log(student)

    if (student) {
        student.firstName = request.firstName
        student.lastName = request.lastName
        student.degree = request.degree

        // const updatedStudent = await Student.findByIdAndUpdate(studentId, student)
        const updatedStudent = await student.save()

        return Response(res, 200, true, "Updated Successfully..!", updatedStudent)
    } else {
        return Response(res, 404, false, "Student not found..!", [])
    }
}

const DeleteStudent = async (req, res) => {
    const studentId = req.params.id
    const student = await Student.findById(studentId)

    if (student) {

        // const deletedStudent = await Student.findByIdAndDelete(studentId, student)

        const deletedStudent = await Student.findByIdAndUpdate(studentId, {
            studentStatus: 3
        })

        return Response(res, 200, true, "Deleted Successfully..!", deletedStudent)

    } else {
        return Response(res, 404, false, "Student not found..!", [])
    }
}

module.exports = {
    GetAllStudents,
    GetStudentById,
    SaveStudent,
    UpdateStudent,
    DeleteStudent
}