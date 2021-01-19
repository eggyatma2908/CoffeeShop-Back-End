const express = require('express')
const router = express.Router()

const { getCart, getCartById, insertCart, deleteCart, updateCart, getCartByIdUser } = require('../controllers/carts')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
.get('/',authenticationToken, getCart)
.get('/:id',authenticationToken, getCartById)
.get('/searchbyiduser/:id',authenticationToken, getCartByIdUser)
.post('/',authenticationToken, insertCart)
.delete('/:id',authenticationToken, deleteCart)
.patch('/:id',authenticationToken, updateCart)

module.exports = router