const express = require('express')
const router = express.Router()

const { getUsers, getUserById } = require('../controllers/users')

router
  .get('/', getUsers)
  .get('/:idUser', getUserById)
  
module.exports = router