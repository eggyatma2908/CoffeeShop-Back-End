const { actionQuery } = require('../helpers/actionQuery')

const historyOrderModels = {
    getHistoryOrder: (limit, offset) => {
        return actionQuery(`SELECT id, idUser, idProduct, paymentMethod FROM historyproductorder LIMIT ${offset},${limit}`)
    },
    getHistoryOrderById: (id) => {
        return actionQuery('SELECT * FROM historyproductorder WHERE id = ?', id)
    },
    insertHistoryOrder: (dataHistoryProductOrder) => {
        return actionQuery('INSERT INTO historyproductorder SET ?', dataHistoryProductOrder)
    },
    insertItemsOrder: (dataItemsProductOrder) => {
        return actionQuery('INSERT INTO itemsproductorder SET ?', dataItemsProductOrder)
    },
    deleteHistoryOrder: (id) => {
        return actionQuery(`DELETE FROM historyproductorder WHERE id = ?`, id)
    }
}

module.exports = historyOrderModels