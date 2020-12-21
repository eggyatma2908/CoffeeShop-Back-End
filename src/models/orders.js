const { actionQuery } = require('../helpers/actionQuery')

const ordersModels = {
    getOrder: (limit, offset, order) => {
        return actionQuery(`SELECT id, cartId, productId, productSize, price, amount FROM orderhistory ORDER BY id ${order} LIMIT ${offset},${limit}`)
    },
    getOrderById: (id) => {
        return actionQuery('SELECT * FROM orderhistory WHERE id = ?', id)
    },
    insertOrder: (data) => {
        return actionQuery('INSERT INTO orderhistory SET ?', data)
    },
    updateOrder: (id) => {
        return actionQuery(`UPDATE orderhistory SET ? WHERE id = ?`, id)
    },
    deleteOrder: (idOrder) => {
        return actionQuery('DELETE FROM orderhistory WHERE id = ?', idOrder)
    }
}

module.exports = ordersModels