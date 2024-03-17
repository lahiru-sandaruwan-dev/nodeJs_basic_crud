const Product = require("../model/product.model")
const Response = require("../utils/response")
const {StatusCode} = require("http-status-codes")
const ProductService = require("../service/product.service")
const helperUtil = require("../utils/helper.util")

const CreateProduct = async (req, res) => {
    const body  = req.body
    // const newProduct = new Product(body)

    console.log(body)
}

module.exports = {
    CreateProduct 
}