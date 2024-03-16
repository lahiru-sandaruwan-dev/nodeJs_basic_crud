const mongoose = require("mongoose");
const Constant = require("../constants");

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full Name is Required!"],
        maxlength: [100, "Full Name shouldn't be exceed 100 characters"]
    },

    email: {
        type: String,
        unique: true,
        required: [true, "Email is Required!"],
        validate: {
            validator: (value) => {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
                value
            },
            message: "Invalid Email Address!"
        }
    },
    picture: {
        type: String,
        required: [true, "User Picture is Required!"]
    },

    password: {
        type: String,
        required: [true, "Password is Required!"]
    },

    role: {
        type: String,
        required: [true, "Role is Required!"],
        enum: {
            values: [Constant.USER.ADMIN, Constant.USER.USER],
            message: "Valid Role is Required!"
        },
    },
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("User", UserSchema)
