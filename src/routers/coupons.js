const express = require('express')
const router = express.Router()

const { getCoupons, getCouponsById, insertCoupons, deleteCoupons, updateCoupons  } = require('../controllers/coupons')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
  .get('/', authenticationToken, authorizationUser, getCoupons)
  .get('/:couponCode', authenticationToken, authorizationUser, getCouponsById)
  .post('/', authenticationToken, authorizationAdmin, insertCoupons)
  .delete('/:couponCode', authenticationToken, authorizationAdmin, deleteCoupons)
  .patch('/:couponCode', authenticationToken, authorizationAdmin, updateCoupons)

module.exports = router