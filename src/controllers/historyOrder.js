const { v4: uuidv4 } = require('uuid')
const historyOrderModels = require('../models/historyOrder')
const { response } = require('../helpers/response')
const createError = require('http-errors')
const { pagination } = require('../helpers/pagination')

const historyOrderController = {
    getHistoryOrder: async (req, res, next) => {
        const { limit = 4, page = 1 } = req.query
        const offset = (parseInt(page) - 1) * parseInt(limit)
    
        const setPagination = await pagination(limit, page, "historyProductOrder", "historyProductOrder")
        historyOrderModels.getHistoryOrder(limit, offset)
        .then(results => {
            const setResults = {
                pagination: setPagination,
                HistoryOrder: results
            }
            response(res, setResults,{ status: 'succeed', statusCode: '200' }, null)
        })
        .catch(() => {
            const error = new createError(500, 'Looks like server having trouble')
            return next(error)
        })
    },
    getHistoryOrderById: async (req, res, next) => {
        const { id } = req.params
        
        if(!id){
            const error = new createError(400, 'Id product cannot be empty')
            return next(error)
        }
        
        historyOrderModels.getHistoryOrderById(id)
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
    insertHistoryOrder: (req, res, next) => {
        const id = uuidv4()
        const { idUser, idProduct, paymentMethod, amount, price, discount } = req.body
        const dataHistoryProductOrder = { id, idUser, idProduct, paymentMethod }
        const dataItemsProductOrder = { id, idHistoryProductOrder: id, amount, price, discount }
        historyOrderModels.insertHistoryOrder(dataHistoryProductOrder)
        historyOrderModels.insertItemsOrder(dataItemsProductOrder)
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
    deleteHistoryOrder: (res, req, next) => {
        let id = req.params
        historyOrderModels.deleteHistoryOrder(id)
        .then((result) => {
            const results = result
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
    }
}

module.exports = historyOrderController