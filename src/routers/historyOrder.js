const express = require('express')
const router = express.Router()

const { getHistoryOrder, getHistoryOrderById, insertHistoryOrder, deleteHistoryOrder } = require('../controllers/historyOrder')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
    .get('/', getHistoryOrder)
    .get('/:id', getHistoryOrderById)
    .post('/', insertHistoryOrder)
    .delete('/:id', deleteHistoryOrder)

module.exports = router