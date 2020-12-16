const { actionQuery } = require('../helpers/actionQuery')

const usersModels = {
  getUsers: (limit, offset, order) => {
    return actionQuery(`SELECT id, email, phoneNumber, gender, username, firstName, lastName, bornDate, address, photoProfile FROM users ORDER BY firstName ${order} LIMIT ${offset},${limit}`)
  },
  getUserById: (idUser) => {
    return actionQuery('SELECT id, email, phoneNumber, gender, username, firstName, lastName, bornDate, address, photoProfile FROM users WHERE id = ?', idUser)
  },
  countAmountDataUsers: (table) => {
    return actionQuery(`SELECT COUNT(*) as totalData FROM ${table}`)
  },
  checkUsers: (email) => {
    return actionQuery('SELECT * FROM users WHERE email = ?', email)
  },
  insertUsers: (data) => {
    return actionQuery('INSERT INTO users SET ?', data)
  },
  searchRoleId: (userId) => {
    return actionQuery('SELECT roleId FROM users WHERE id = ? ', userId)
  }
}

module.exports = usersModels