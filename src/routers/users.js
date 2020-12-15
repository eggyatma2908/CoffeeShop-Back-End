const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

router
  .get('/')
  .post('/register', usersController.registerUsers)
  .post('/login', usersController.loginUsers)

module.exports = router