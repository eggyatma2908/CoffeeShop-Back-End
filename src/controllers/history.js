const createError = require('http-errors')
const { pagination } = require('../helpers/pagination')
const { response } = require('../helpers/response')
const historyModel = require('../models/history')

const history = {
  getOrderHistory: async (req, res, next) => {
    const userId = req.user.userId
    try{
      const result = await historyModel.getOrderHistory(userId)
      response(res, result, {status: 'succeed', statusCode: 200}, null)
    } catch (error) {
      next(createError(500, 'Looks like server having trouble'))
    }
  },
  deleteOrderHistory: async (req, res, next) => {
    const orderId = req.params.id
    console.log('orderId', orderId)
    try{
      await historyModel.deleteOrderHistory(orderId)
      response(res, 'delete successfully', {status: 'succeed', statusCode: 200}, null)
    } catch (error) {
      next(createError(500, 'Looks like server having trouble'))
    }
  }
}

module.exports = history