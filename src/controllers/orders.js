const createError = require('http-errors')
const { v4: uuidv4 } = require('uuid')
const ordersModels = require('../models/orders')
const { pagination } = require('../helpers/pagination')
const { response } = require('../helpers/response')

const ordersController =  {
  getOrder: async (req, res, next) => {
    const { limit = 4, page = 1, order = "DESC" } = req.query
    const offset = (parseInt(page) - 1) * parseInt(limit)

    const setPagination = await pagination(limit, page, "orderhistory", "orderhistory")
    ordersModels.getOrder(limit, offset, order)
      .then(results => {
        const setResults = {
          pagination: setPagination,
          orders: results
        }
        response(res, setResults,{ status: 'succeed', statusCode: '200' }, null)
      })
      .catch(() => {
        const error = new createError(500, 'Looks like server having trouble')
        return next(error)
      })
  },
  getOrderById: async (req, res, next) => {
    const { id } = req.params
    if(!id){
      const error = new createError(400, 'Id product cannot be empty')
      return next(error)
    }
    ordersModels.getOrderById(id)
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
  insertOrder: (req, res, next) => {
    // const id = uuidv4()
    // const { cartId, productId, productSize, price, amount } = req.body
    // const data = { id, cartId, productId, productSize, price, amount }
    console.log('req.body', req.body)
    const { cartId, item } = req.body
    item.forEach(async (el)=> {
      const dataSend = {
        cartId,
        ...el
      } 
      const result = await ordersModels.insertOrder(dataSend)
    })
    response(res, {message: 'Product added successfully'}, {
      status: 'succeed',
      statusCode: 200
    }, null)
    // ordersModels.insertOrder(data)
    //   .then(() => {
        // response(res, {message: 'Product added successfully'}, {
        //   status: 'succeed',
        //   statusCode: 200
        // }, null)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     const error = new createError(500, `Looks like server having trouble`)
    //     return next(error)
    //   })
  },
  deleteOrder: (req, res, next) => {
    const idOrder = req.params.id
    ordersModels.deleteOrder(idOrder)
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
  updateOrder: (req, res, next) => {
    const id = req.params

    if (Object.keys(req.body).length === 0) {
      const error = new createError(400, `Forbidden: Nothing to update`)
      return next(error)
    }

    if (req.body.id || req.body.cartId) {
      const error = new createError(400, `Forbidden: Cannot change id, cartId`)
      return next(error)
    }

    const data = {...req.body}
    ordersModels.updateOrder(id, data)
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
  }
}

module.exports = ordersController