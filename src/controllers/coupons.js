const { v4: uuidv4 } = require('uuid')
const couponsModels = require('../models/coupons')
const { response } = require('../helpers/response')
const createError = require('http-errors')

const couponsController = {
    getCoupons: (req, res, next) => {
        couponsModels.getCoupons()
        .then((result) => {
            response(res, result,{ status: 'succeed', statusCode: '200' }, null)
        })
        .catch(() => {
            const error = new createError(500, 'Looks like server having trouble')
            return next(error)
        })
    },
    getCouponsById: (req, res, next) => {
        couponCode = req.params.couponCode
        couponsModels.getCouponById(couponCode)
        .then((result) => {
            response(res, result,{ status: 'succeed', statusCode: '200' }, null)
        })
        .catch(() => {
            const error = new createError(500, 'Looks like server having trouble')
            return next(error)
        })
    },
    insertCoupons: (req, res, next) => {
        const couponCode = uuidv4()
        const { itemToBuy, amountItemToBuy, itemPromo, percentDiscount, expired } = req.body
        
        const data = {
            couponCode, itemToBuy,amountItemToBuy, itemPromo, percentDiscount, expired
        }
        couponsModels.insertCoupons(data)
        .then(() => {
            response(res, {message: 'Coupons added successfully'}, {
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
    updateCoupons: (req, res, next) => {
        const couponCode = req.params.couponCode
        const { itemToBuy, amountItemToBuy, itemPromo, percentDiscount, expired } = req.body
        const data = {
            couponCode,
            itemToBuy,
            amountItemToBuy,
            itemPromo,
            percentDiscount,
            expired
        }
        couponsModels.updateCoupons(couponCode, data)
        .then(() => {
            response(res, {message: 'Coupons update successfully'}, {
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
    deleteCoupons: (req, res, next) => {
        const couponCode = req.params.couponCode
        couponsModels.deleteCoupons(couponCode)
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
    }
}

module.exports = couponsController