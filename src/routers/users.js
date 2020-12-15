const express = require('express')
const router = express.Router()

const { getUsers, getUserById, registerUsers, loginUsers, sendEmailVerification  } = require('../controllers/users')
const sendEmail = require('../helpers/sendEmail')

router
  .get('/', getUsers)
  .get('/:idUser', getUserById)
  .post('/register', sendEmailVerification, registerUsers)
  .post('/login', loginUsers)

module.exports = router