const express = require("express")
const { CreateProduct } = require("../controller/product.controller")
const authMiddleware = require("../middleware/auth.middleware")
const Constant = require("../constants")
// const ProductController = require("../controller/product.controller")

const ProductRouter = express.Router()

ProductRouter.post("/create" , authMiddleware.authorize([Constant.USER.ADMIN]), CreateProduct)

module.exports = ProductRouter