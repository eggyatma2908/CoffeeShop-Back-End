const express = require('express')
const router = express.Router()
const { uploadMulter } = require('../middleware/upload')
const { getProducts, getProductById, getProductByTypeProduct , insertProducts, deleteProducts, updateProducts } = require('../controllers/products')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
  .get('/typeProduct', authenticationToken, authorizationUser, getProductByTypeProduct)
  .post('/', authenticationToken, authorizationAdmin, uploadMulter.single('photoProduct'), insertProducts)
  .get('/', authenticationToken, authorizationUser, getProducts)
  .get('/:idProduct', authenticationToken, authorizationUser, getProductById)
  .delete('/:idProduct', authenticationToken, authorizationAdmin, deleteProducts)
  .patch('/:idProduct', authenticationToken, authorizationAdmin, uploadMulter.single('photoProduct'), updateProducts)

module.exports = router