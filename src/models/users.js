const{ actionQuery } = require('../helpers/actionQuery')

const usersModels = {
  getUsers: (limit, offset, order) => {
    return actionQuery(`SELECT * FROM users ORDER BY firstName ${order} LIMIT ${offset},${limit}`)
  },
  countAmountDataUsers: (table) => {
    return actionQuery(`SELECT COUNT(*) AS totalData FROM ${table}`)
  }
}

module.exports = usersModels