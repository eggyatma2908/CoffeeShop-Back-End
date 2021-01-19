const express = require('express')
const router = express.Router()
const { getOrderHistory, deleteOrderHistory } = require('../controllers/history')
const authenticationToken = require('../helpers/authenticationToken')

router
.get('/',authenticationToken, getOrderHistory)
.delete('/delete/:id', authenticationToken, deleteOrderHistory)

module.exports = router