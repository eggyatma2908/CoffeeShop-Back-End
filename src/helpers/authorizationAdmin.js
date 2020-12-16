const createError = require('http-errors')

const usersModels = require('../models/users')

const authorizationAdmin = (req, res, next) => {
  const userId = req.user.userId
  usersModels.searchRoleId(userId)
  .then(result => {
    const resultRole = result[0].roleId
    if(resultRole === 1) {
      return next()
    } else {
      const error = new createError(400, "Sorry, You don't have permission to access this endpoint")
      return next(error)
    } 
  })
  .catch(() => {
    const error = new createError(500, 'Looks like server having trouble')
    return next(error)
  })
}

module.exports = authorizationAdmin