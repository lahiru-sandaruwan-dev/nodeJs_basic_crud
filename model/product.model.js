const mongoose = require("mongoose");
const Constant = require("../constants")

const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Product name is required!"],
        maxlength: [100, "Product name is shouldn't be exceed than 100 characters!"]
    },

    productDescription: {
        type: String,
        maxlength: [500, "Product description is shouldn't be exceed than 500 characters!"]
    },

    productPrice: {
        type: Number,
        required: [true, "Product price is required!"],
    },

    productImage: {
        type: String,
        required: [true, "Product Image is required!"]
    },

    productMeasure: {
        type: String,
        required: [true, "Product Image is required!"],
        enum: {
            values: [Constant.PRODUCT.MEASURES.KG, Constant.PRODUCT.MEASURES.LITER, Constant.PRODUCT.MEASURES.PIECE],
            message: "Valid measure type is required!"
        }
    }

},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("Product", ProductSchema)