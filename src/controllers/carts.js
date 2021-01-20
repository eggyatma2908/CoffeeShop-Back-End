const { v4: uuidv4 } = require('uuid')
const cartModels = require('../models/carts')
const { response } = require('../helpers/response')
const createError = require('http-errors')
const { pagination } = require('../helpers/pagination')

const cartController = {
    getCart: async (req, res, next) => {
        const { limit = 4, page = 1, where = "all" } = req.query
        const offset = (parseInt(page) - 1) * parseInt(limit)
    
        cartModels.getCart(limit, offset, where)
        .then(async(results) => {
            let setResults = null
            if (where === 'all') {
                const setPagination = await pagination(limit, page, "cart", "cart")
                setResults = {
                    pagination: setPagination,
                    HistoryOrder: results
                }
            } else {
                const setPagination = await pagination(limit, page, "cart", "cart", results.length)
                setResults = {
                    pagination: setPagination,
                    HistoryOrder: results
                }
            }
            response(res, setResults,{ status: 'succeed', statusCode: '200' }, null)
        })
        .catch((err) => {
            console.log('err', err)
            const error = new createError(500, 'Looks like server having trouble')
            return next(error)
        })
    },
    getCartById: async (req, res, next) => {
        const { id } = req.params
        
        if(!id){
            const error = new createError(400, 'Id product cannot be empty')
            return next(error)
        }
        
        cartModels.getCartById(id)
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
    insertCart: (req, res, next) => {
        const {id, userId, payTotal, paymentMethod, deliveryMethod } = req.body
        const dataCart = { id, userId, payTotal, paymentMethod, deliveryMethod, deliveryStatus: 'pending'}
        cartModels.insertCart(dataCart)
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
    deleteCart: (req, res, next) => {
        let idCart = req.params.id
        console.log(req.params)

        cartModels.deleteCart(idCart)
        .then(() => {
            response(res, {message: 'Deleted Success'}, {
                status: 'succeed',
                statusCode: 200
            }, null)
        })
        .catch((err) => {
            console.log(err)
            const error = new createError(500, `Looks like server having trouble`)
            return next(error)
        })
    },
    updateCart: (req, res, next) => {
        let id = req.params.id
        cartModels.updateCart(id)
        .then((result) => {
            response(res, {message: 'Status has been updated'}, {
                status: 'succeed',
                statusCode: 200
            }, null)
        })
        .catch((err) => {
            console.log(err)
            const error = new createError(500, `Looks like server having trouble`)
            return next(error)
        })
    },
    getCartByIdUser: (req, res, next) => {
        const id = req.params.id
        if(!id) {
            const error = new createError(400, 'id user cannot empty')
            next(error)
        }
        cartModels.getCartByIdUser(id)
        .then(results => {
            if(results.length < 1) {
                response(res, 'Cart not found', {
                    status: 'succeed',
                    statusCode: 200
                }, null)
              }
            response(res, results[0], {
                status: 'succeed',
                statusCode: 200
            }, null)
        })
        .catch(() => {
            const error = new createError(500, `Looks like server having trouble`)
            return next(error)
       })
    }
}

module.exports = cartController