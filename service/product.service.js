const Product = require("../model/product.model")


const SaveProduct = async (obj) => {
    return await obj.save()
}

module.exports = {
    SaveProduct
}