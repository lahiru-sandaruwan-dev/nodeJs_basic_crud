const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!"]
    },

    lastName: {
        type: String
    },

    email: {
        type: String
    },

    mobileNumbers: {
        type: [String]
    },

    degree: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    },

    studentStatus: {
        type: Number,
        default: 1
    }
},
    { timestamps: true, versionKey: false }
);

const Student = mongoose.model("Student", StudentSchema)
module.exports = Student;