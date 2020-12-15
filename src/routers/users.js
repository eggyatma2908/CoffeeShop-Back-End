const express = require('express')
const router = express.Router()

const { getUsers, getUserById, registerUsers, loginUsers  } = require('../controllers/users')

router
  .get('/', getUsers)
  .get('/:idUser', getUserById)
  .post('/register', registerUsers)
  .post('/login', loginUsers)

module.exports = router