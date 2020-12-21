const express = require('express')
const router = express.Router()

const { getHistoryOrder, getHistoryOrderById, insertHistoryOrder, deleteHistoryOrder } = require('../controllers/historyOrder')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
    .get('/', authenticationToken, getHistoryOrder)
    .get('/:id', authenticationToken, getHistoryOrderById)
    .post('/', authenticationToken, authorizationUser, insertHistoryOrder)
    .delete('/:id', authenticationToken, authorizationUser, deleteHistoryOrder)

module.exports = router