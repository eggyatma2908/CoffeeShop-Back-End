const express = require('express')
const router = express.Router()
const { emailVerification, checkIfEmailVerified } = require('../controllers/email')
router
.patch('/emailverification',emailVerification)
.get('/checkEmailVerified',checkIfEmailVerified)
module.exports = router