const express = require('express')
const router = express.Router()
const { uploadMulter } = require('../middleware/upload')

const { getUsers, getUserById, registerUsers, loginUsers, deleteUser, updateUser } = require('../controllers/users')

router
  .get('/', getUsers)
  .get('/:idUser', getUserById)
  .post('/register', registerUsers)
  .post('/login', loginUsers)
  .delete('/:idUser', deleteUser)
  .patch('/profile/:id', uploadMulter.single('photoProfile'), updateUser)
  .patch('/password/:id')

module.exports = router