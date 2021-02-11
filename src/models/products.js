const { actionQuery } = require('../helpers/actionQuery')

const productsModels = {
  getProducts: (limit, offset, order, productName) => {
    if (!productName) {
      return actionQuery(`SELECT idProduct, productName, price, stock, photoProduct, description, discountPercent, idTypeProduct, homeDelivery, dineIn, takeAway, deliveryHourStart, deliveryHourEnd FROM products ORDER BY productName ${order} LIMIT ${offset},${limit}`)
    } else {
      return actionQuery(`SELECT idProduct, productName, price, stock, photoProduct, description, discountPercent, idTypeProduct, homeDelivery, dineIn, takeAway, deliveryHourStart, deliveryHourEnd FROM products WHERE productName LIKE ?`, `%${productName}%`)
    }
  },
  getProductById: (idProduct) => {
    return actionQuery('SELECT idProduct, productName, price, stock, photoProduct, description, discountPercent, idTypeProduct, homeDelivery, dineIn, takeAway, deliveryHourStart, deliveryHourEnd FROM products WHERE idProduct = ?', idProduct)
  },
  insertProducts: (data) => {
      return actionQuery(`INSERT INTO products SET ?`, data)
  },
  deleteProducts: (idProduct) => {
    return actionQuery(`DELETE FROM products WHERE idProduct = ?`, idProduct)
  },
  updateProducts: (idProduct, data) => {
    return actionQuery(`UPDATE products SET productName = '${data.productName}', price = '${data.price}', stock = '${data.stock}', photoProduct = '${data.photoProduct}', description = '${data.description}', discountPercent = '${data.discountPercent}', idTypeProduct = '${data.idTypeProduct}', homeDelivery = '${data.homeDelivery}', dineIn = '${data.dineIn}', takeAway = '${data.takeAway}' WHERE idProduct = ?`, idProduct)
  },
  getProductByTypeProduct: (typeProduct, limit, offset, order) => {
    return actionQuery(`SELECT * FROM products INNER JOIN typeproduct ON typeproduct.idTypeProduct = products.idTypeProduct AND typeproduct.typeName = ? ORDER BY products.price ${order} LIMIT ${offset},${limit}`, typeProduct)
  },
  countTypeProduct: (typeProduct) => {
    return actionQuery(`SELECT COUNT(*) AS totalData FROM typeproduct INNER JOIN products ON typeproduct.idTypeProduct = products.idTypeProduct WHERE typeName = '${typeProduct}'`)
  }
}

module.exports = productsModels
