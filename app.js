require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { response } = require('./src/helpers/response')
const cors = require('cors') 
const usersRoute = require('./src/routers/users')
const productsRoute = require('./src/routers/products')
const couponsRoute = require('./src/routers/coupons')

// Using CORS
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'))

// Grouping End-Point
app.use('/v1/users', usersRoute)
app.use('/v1/products', productsRoute)
app.use('/v1/coupons', couponsRoute)

app.use('/upload', express.static('./upload'))

// Default Response Unknown End-Point
app.use('*', (req, res) => {
})

// Error Handling
app.use((err, req, res, next) => {
    response(res, null, { status: err.status || 'Failed', statusCode: err.statusCode || 400 }, { message: err.message })
})

app.listen(process.env.PORT, () => console.log('Server running on port : '+ process.env.PORT))