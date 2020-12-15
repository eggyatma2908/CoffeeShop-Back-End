const connection = require('../configs/db')

exports.checkUser = (email) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users WHERE email = ?', email, (error, results) => {
      if (!error) {
        resolve(results)
      } else {
        reject(error)
      }
    })
  })
}

exports.insertUser = (data) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', data, (error, results) => {
      if (!error) {
        resolve(results)
      } else {
        reject(error)
      }
    })
  })
}