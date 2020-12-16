const express = require('express')
const router = express.Router()

const { getUsers, getUserById, registerUsers, loginUsers, sendEmailVerification  } = require('../controllers/users')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
  .get('/', authenticationToken, authorizationUser, getUsers)
  .get('/:idUser', authenticationToken, authorizationUser, getUserById)
  .post('/register', sendEmailVerification, registerUsers)
  .post('/login', loginUsers)

module.exports = router