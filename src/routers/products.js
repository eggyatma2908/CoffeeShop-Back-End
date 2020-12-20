const express = require('express')
const router = express.Router()
const { uploadMulter } = require('../middleware/upload')
const { getProducts, getProductById, getProductByTypeProduct , insertProducts, deleteProducts, updateProducts } = require('../controllers/products')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
  .get('/typeProduct', getProductByTypeProduct)
  .post('/', uploadMulter.single('photoProduct'), insertProducts)
  .get('/', getProducts)
  .get('/:idProduct', getProductById)
  .delete('/:idProduct', deleteProducts)
  .patch('/:idProduct', uploadMulter.single('photoProduct'), updateProducts)

module.exports = router