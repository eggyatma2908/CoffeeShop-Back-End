const express = require('express')
const router = express.Router()
const { uploadMulter } = require('../middleware/upload')
const { getProducts, getProductById, getProductByTypeProduct , insertProducts, deleteProducts, updateProducts } = require('../controllers/products')
const authenticationToken = require('../helpers/authenticationToken')
const authorizationUser = require('../helpers/authorizationUser')
const authorizationAdmin = require('../helpers/authorizationAdmin')

router
<<<<<<< HEAD
  .get('/typeProduct', authenticationToken, authorizationUser, getProductByTypeProduct)
  .post('/', authenticationToken, authorizationUser, uploadMulter.single('photoProduct'), insertProducts)
  .get('/', authenticationToken, authorizationUser, getProducts)
  .get('/:idProduct', authenticationToken, authorizationUser, getProductById)
=======
  .get('/typeProduct', authenticationToken, getProductByTypeProduct)
  .post('/', authenticationToken, authorizationAdmin, uploadMulter.single('photoProduct'), insertProducts)
  .get('/', authenticationToken, getProducts)
  .get('/:idProduct', authenticationToken, getProductById)
>>>>>>> 20a37ece0449f81df9a4e40a3b5821bf860a0d5e
  .delete('/:idProduct', authenticationToken, authorizationAdmin, deleteProducts)
  .patch('/:idProduct', authenticationToken, authorizationAdmin, uploadMulter.single('photoProduct'), updateProducts)

module.exports = router