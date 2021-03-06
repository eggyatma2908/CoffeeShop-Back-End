const { actionQuery } = require('../helpers/actionQuery')

const usersModels = {
  getUsers: (limit, offset, order, username) => {
    if (!username){
      return actionQuery(`SELECT id, email, phoneNumber, gender, username, firstName, lastName, bornDate, address, photoProfile FROM users ORDER BY firstName ${order} LIMIT ${offset},${limit}`)
    } else {
      return actionQuery(`SELECT id, email, phoneNumber, gender, username, firstName, lastName, bornDate, address, photoProfile FROM users WHERE username LIKE ? ORDER BY firstName ${order} LIMIT ${offset},${limit}`, `%${username}%`)
    }
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
  deleteUser: (idUser) => {
    return actionQuery('DELETE FROM users WHERE id = ?', idUser)
  },
  updateUser: (id, data) => {
    return actionQuery(`UPDATE users SET email = ?, phoneNumber = ?, gender = ?, username = ?, firstName = ?, lastName = ?, bornDate = ?, address = ?, photoProfile = ?, updatedAt = ? WHERE id = ?`,
     [data.email, data.phoneNumber, data.gender, data.username, data.firstName, data.lastName, data.bornDate, data.address, data.photoProfile, data.updateAt, id])
  },
  searchRoleId: (userId) => {
    return actionQuery('SELECT roleId FROM users WHERE id = ? ', userId)
  }
}

module.exports = usersModels