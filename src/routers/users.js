const express = require('express')
const router = express.Router()
const { loginUsers, registerUsers } = require('../controllers/users')

router
  .get('/')
  .post('/register', registerUsers)
  .post('/login', loginUsers)

module.exports = router