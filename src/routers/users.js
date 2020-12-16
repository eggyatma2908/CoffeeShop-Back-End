const express = require('express')
const router = express.Router()
const { uploadMulter } = require('../middleware/upload')

const { getUsers, getUserById, registerUsers, loginUsers, deleteUser, updateUser } = require('../controllers/users')
const { getUsers, getUserById, registerUsers, loginUsers, sendEmailVerification, deleteUser, updateUser  } = require('../controllers/users')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
  .get('/', authenticationToken, authorizationUser, getUsers)
  .get('/:idUser', authenticationToken, authorizationUser, getUserById)
  .post('/register', sendEmailVerification, registerUsers)
  .post('/login', loginUsers)
  .delete('/:idUser', deleteUser)
  .patch('/profile/:id', uploadMulter.single('photoProfile'), updateUser)
  .patch('/password/:id')

module.exports = router