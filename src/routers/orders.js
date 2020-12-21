const express = require('express')
const router = express.Router()

const { getOrder, getOrderById, insertOrder, deleteOrder, updateOrder } = require('../controllers/orders')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
    .get('/', getOrder)
    .get('/:id', getOrderById)
    .post('/', insertOrder)
    .delete('/:id', deleteOrder)
    .patch('/:id', updateOrder)

module.exports = router