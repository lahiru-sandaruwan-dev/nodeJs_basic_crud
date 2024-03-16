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
                return /([!# - '*+/-9=?A-Z^-~-]+(\.[!#-' * +/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/.test(value);
                value
            },
            message: "Invalid Email Address!"
        }
    },
    picture: {
        type: String,
        required: [true, "User Picture is Required!"]
    },

    role: {
        type: String,
        required: [true, "Role is Required!"],
        enum: {
            value: [Constant.USER.ADMIN, Constant.USER.USER],
            message: "Valid Role is Required!"
        }
    },
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("User", UserSchema)
