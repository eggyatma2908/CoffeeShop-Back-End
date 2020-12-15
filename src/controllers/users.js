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
  }
}

module.exports = usersController