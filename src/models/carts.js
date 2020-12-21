const { actionQuery } = require('../helpers/actionQuery')

const cartModels = {
    getCart: (limit, offset) => {
        return actionQuery(`SELECT id, userId, subTotal, tax, shipping, paymentMethod, deliveryMethod, status FROM cart LIMIT ${offset},${limit}`)
    },
    getCartById: (id) => {
        return actionQuery('SELECT * FROM cart WHERE id = ?', id)
    },
    insertCart: (dataCart) => {
        return actionQuery('INSERT INTO cart SET ?', dataCart)
    },
    deleteCart: (idCart) => {
        return actionQuery(`DELETE FROM cart WHERE id = ?`, idCart)
    },
    updateCart: (id) => {
        return actionQuery(`UPDATE cart SET status = 1 WHERE id = ?`, id)
    }
}

module.exports = cartModels