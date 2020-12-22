const express = require('express')
const router = express.Router()

const { getCart, getCartById, insertCart, deleteCart, updateCart } = require('../controllers/carts')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
.get('/', getCart)
.get('/:id', getCartById)
.post('/', insertCart)
.delete('/:id', deleteCart)
.patch('/:id', updateCart)

module.exports = router