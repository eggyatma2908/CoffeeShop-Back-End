const express = require('express')
const router = express.Router()
const { uploadMulter } = require('../middleware/upload')

const { getUsers, getUserById, registerUsers, loginUsers, sendEmailVerification, getRoleId, deleteUser,updatePhotoProfile, updateUser, forgotPassword  } = require('../controllers/users')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
  .get('/', authenticationToken, authorizationUser, getUsers)
  .get('/:idUser', authenticationToken, getUserById)
  .get('/getroleid/:id', authenticationToken, getRoleId)
  .post('/forgotpassword', forgotPassword)
  .post('/register', sendEmailVerification, registerUsers)
  .post('/login', loginUsers)
  .delete('/:idUser', authenticationToken, authorizationUser, deleteUser)
  .patch('/profile/:id', authenticationToken, uploadMulter.single('photoProfile'), updatePhotoProfile)
  .patch('/password/:id')

module.exports = router