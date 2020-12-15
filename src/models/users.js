const { actionQuery } = require('../helpers/actionQuery')

const usersModels = {
    checkUsers: (email) => {
        return actionQuery('SELECT * FROM users WHERE email = ?', email)
    },
    insertUsers: (data) => {
        return actionQuery('INSERT INTO users SET ?', data)
    }
}

module.exports = usersModels