const createError = require('http-errors')
const sendEmail = require('../helpers/sendEmail')
const emailModel = require('../models/email')
const { response } = require('../helpers/response')

class Controller {

  sendEmailVerification(req, res, next) {
    const email = req.body.email
    // const name = req.body.name
    if (!email) {
      const error = new createError(404, 'Forbidden: message and email cannot be empty')
      return next(error)
    }

    sendEmail(email)
      .then(() => {
        const results = { message: "successfully sent the verification email" }
        response(res, results, {
          status: 'succeed',
          statusCode: 200
        }, null)
      })
      .catch(() => {
        const error = new createError(500, 'Looks like server having trouble..')
        return next(error)
      })
  }

  emailVerification(req, res, next) {
    const email = req.body.email
    if (!email) {
      const error = new createError(400, 'email cannot empty')
      return next(error)
    }
    emailModel.checkEmailStatus(email)
      .then(results => {
        const emailVerification = results[0].emailVerification
        if (emailVerification === 1) {
          const error = new createError(404, 'Forbidden')
          return next(error)
        } else if (emailVerification === 0) {
          emailModel.emailVerification(email)
            .then(exist => {
              const message = { message: 'your email was successfully verified' }
              response(res, message, { status: 'Succeedd', statusCode: 200 }, null)
            })
            .catch(() => {
              const error = new createError(500, 'Looks like server having trouble')
              return next(error)
            })
        }
      })
      .catch(() => {
        const error = new createError(500, 'Looks like server having trouble..')
        return next(error)
      })
  }

  checkIfEmailVerified(req, res, next) {
    const email = req.headers.email
    emailModel.checkEmailStatus(email)
      .then(results => {
        if (results[0].length === 0) {
          const error = new createError(404, 'Forbidden: You are not user')
          return next(error)
        }
        if (results[0].emailStatus === 1) {
          const error = new createError(404, 'Forbidden: Your account has been verified')
          return next(error)
        }
        const message = { message: 'your account can be verified' }
        response(res, message, { status: 'Succeedd', statusCode: 200 }, null)
      })
      .catch(() => {
        const error = new createError(500, 'Looks like server having trouble..')
        return next(error)
      })
  }
}
const Email = new Controller()
module.exports = Email
