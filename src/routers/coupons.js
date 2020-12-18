const express = require('express')
const router = express.Router()

const { getCoupons, getCouponsById, insertCoupons, deleteCoupons, updateCoupons  } = require('../controllers/coupons')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
  .get('/', getCoupons)
  .get('/:couponCode', getCouponsById)
  .post('/', insertCoupons)
  .delete('/:couponCode', deleteCoupons)
  .patch('/:couponCode', updateCoupons)

module.exports = router