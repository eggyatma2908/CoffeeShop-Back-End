const createError = require('http-errors')
const { v4: uuidv4 } = require('uuid')
const productsModels = require('../models/products')
const { pagination } = require('../helpers/pagination')
const { response } = require('../helpers/response')

const productsController =  {
  getProducts: async (req, res, next) => {
    const { limit = 4, page = 1, order = "DESC" } = req.query
    const offset = (parseInt(page) - 1) * parseInt(limit)
    const productName = req.query.productName || null

    const setPagination = await pagination(limit, page, "products", "products")
    productsModels.getProducts(limit, offset, order, productName)
      .then(results => {
        const setResults = {
          pagination: setPagination,
          products: results
        }
        response(res, setResults,{ status: 'succeed', statusCode: '200' }, null)
      })
      .catch(() => {
        const error = new createError(500, 'Looks like server having trouble')
        return next(error)
      })
  },
  getProductById: async (req, res, next) => {
    const { idProduct } = req.params
    if(!idProduct){
      const error = new createError(400, 'Id product cannot be empty')
      return next(error)
    }
    productsModels.getProductById(idProduct)
    .then(results => {
      if(results.length < 1){
        const error = new createError(400, 'Id product cannot be empty')
        return next(error)
      }
      response(res, results[0], { status: 'succeed', statusCode: 200 }, null)
    })
    .catch(() => {
      const error = new createError(500, 'Looks like server having trouble')
      return next(error)
    })
  },
  insertProducts: (req, res, next) => {
    const idProduct = uuidv4()
    const { productName, price, stock, description, discountPercent, idTypeProduct, homeDelivery, dineIn, takeAway, deliveryHourStart, deliveryHourEnd } = req.body
    const data = {
      idProduct,
      productName,
      price,
      stock,
      photoProduct: `${process.env.BASE_URL}/upload/${req.file.filename}`,
      description,
      idTypeProduct,
      homeDelivery,
      dineIn,
      takeAway,
      deliveryHourStart,
      deliveryHourEnd
    }
    productsModels.insertProducts(data)
      .then(() => {
        response(res, {message: 'Product added successfully'}, {
          status: 'succeed',
          statusCode: 200
        }, null)
      })
      .catch(() => {
        const error = new createError(500, `Looks like server having trouble`)
        return next(error)
      })
  },
  deleteProducts: (req, res, next) => {
    const idProduct = req.params.idProduct
    productsModels.deleteProducts(idProduct)
      .then(() => {
        response(res, {message: 'Deleted Success'}, {
          status: 'succeed',
          statusCode: 200
        }, null)
      })
      .catch(() => {
        const error = new createError(500, `Looks like server having trouble`)
        return next(error)
      })
  },
  updateProducts: (req, res, next) => {
    const idProduct = req.params.idProduct

    if (Object.keys(req.body).length === 0) {
      const error = new createError(400, `Forbidden: Nothing to update`)
      return next(error)
    }
  
    const { productName, price, stock, description, discountPercent, idTypeProduct, homeDelivery, dineIn, takeAway } = req.body
    
    const data = {
            idProduct,
            productName,
            price,
            stock,
            photoProduct: `${process.env.BASE_URL}/upload/${req.file.filename}`,
            description,
            discountPercent,
            idTypeProduct,
            homeDelivery,
            dineIn,
            takeAway
    }
    productsModels.updateProducts(idProduct, data)
      .then(result => {
        const resultUser = result
        response(res, {message: 'Data Product has been updated'}, {
          status: 'succeed',
          statusCode: 200
        }, null)
      })
      .catch(() => {
        const error = new createError(500, 'Looks like server having trouble')
        return next(error)
      })
  },
  getProductByTypeProduct: async (req, res, next) => {
    const typeProduct = req.query.typeProduct
    if(!typeProduct) {
      const error = new createError(400, 'product type cannot be empty ')
      return next(error)
    }
    const { limit = 4, page = 1, order = "DESC" } = req.query
    const offset = (parseInt(page) - 1) * parseInt(limit)
    const setPagination = await pagination(limit, page, "products/typeProduct", "products")

    productsModels.getProductByTypeProduct(typeProduct, limit, offset, order) 
    .then(results => {
      const responseResults = {
        pagination: setPagination,
        products: results
      }
      response(res, responseResults, { status: 'succeed', statusCode: 200 }, null)
    })
    .catch(() => {
      const error = new createError(500, 'Looks like server having trouble')
      return next(error)
    })
  }
}

module.exports = productsController