const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const { checkUser, insertUser } = require('../models/users')
const helper = require('../helpers/helpers')

exports.registerUsers = (req, res) => {
    const id = uuidv4()
    const { email, password, phoneNumber } = req.body
    const roleId = req.body.roleId || 0
    checkUser(email)
    .then((result) => {
      if (result.length > 0) return helper.response(res, null, 401, { error: 'email sudah ada' })

      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          const data = {
            id,
            email,
            password: hash,
            roleId,
            phoneNumber,
            createdAt: new Date()
          }
          
          insertUser(data)
          .then(() => {
              return helper.response(res, { message: 'register success' }, 201, null)
            })
        })
      })
    })
}

exports.loginUsers = (req, res) => {
    const { email, password } = req.body
    checkUser(email)
    .then((result) => {
      const user = result[0]
      // compare/verify password
      bcrypt.compare(password, user.password, function (err, resCheck) {
        if (!resCheck) return helper.response(res, null, 401, { error: 'password wrong !!' })
        delete user.password

        // jsonwebtoken
        jwt.sign({ userID: user.id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' }, function (err, token) {
          user.token = token
          return helper.response(res, user, 200, null)
        })
      })
    })
}