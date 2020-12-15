const createError = require('http-errors')

const usersModels = require('../models/users')
const { pagination } = require('../helpers/pagination')
const { response } = require('../helpers/response')

const usersController =  {
  getUsers: async (req, res, next) => {
    const { limit = 4, page = 1, order = "DESC" } = req.query
    const offset = (parseInt(page) - 1) * parseInt(limit)

    const setPagination = await pagination(limit, page, "users", "users")
    usersModels.getUsers(limit, offset, order)
      .then(results => {
        const setResults = {
          pagination: setPagination,
          users: results
        }
        response(res, setResults,{ status: 'succeed', statusCode: '200' }, null)
      })
      .catch(() => {
        const error = new createError(500, 'Looks like server having trouble')
        return next(error)
      })
  },
  getUserById: async (req, res, next) => {
    const { idUser } = req.params
    if(!idUser){
      const error = new createError(400, 'Id user cannot be empty')
      return next(error)
    }
    usersModels.getUserById(idUser)
    .then(results => {
      if(results.length < 1){
        const error = new createError(400, 'Id user cannot be empty')
        return next(error)
      }
      response(res, results[0], { status: 'succeed', statusCode: 200 }, null)
    })
    .catch(() => {
      const error = new createError(500, 'Looks like server having trouble')
      return next(error)
    })
  }
}

module.exports = usersController