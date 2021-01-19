const { actionQuery } = require('../helpers/actionQuery')

const history = {
  getOrderHistory: (userId) => {
    return actionQuery('SELECT orderhistory.*, cart.deliveryStatus FROM orderhistory INNER JOIN cart ON cart.id = orderHistory.cartId WHERE cart.userId = ?', userId)
  },
  deleteOrderHistory: (orderId) => {
    return actionQuery('DELETE FROM orderhistory WHERE id = ?', orderId)
  }
}

module.exports = history