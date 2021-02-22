const { actionQuery } = require('../helpers/actionQuery')

const cartModels = {
    getCart: (limit, offset, where) => {
        if (where === 'all') {
            return actionQuery(`SELECT * FROM cart LIMIT ${offset},${limit}`)
        } else if (where === 'pending') {
            return actionQuery('SELECT * FROM cart WHERE deliveryStatus = "pending"')
        } else if (where === 'delivered') {
            return actionQuery('SELECT * FROM cart WHERE deliveryStatus = "delivered"')
        } else if (where === 'allpendingnopagination') {
            return actionQuery('SELECT * FROM cart WHERE deliveryStatus = "pending"')
        }
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
        return actionQuery(`UPDATE cart SET deliveryStatus = 'delivered' WHERE id = ?`, id)
    },
    getCartByIdUser: (id) => {
        return actionQuery(`SELECT * FROM cart WHERE userId = ?`, id)
    }
}

module.exports = cartModels