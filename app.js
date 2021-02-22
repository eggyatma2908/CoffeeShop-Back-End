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
const orderRoute = require('./src/routers/orders')
const emailRoute = require('./src/routers/email')
const cartRoute = require('./src/routers/carts')
const historyRoute = require('./src/routers/history')

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
const stripe = require('stripe')(stripeSecretKey)
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
app.use('/v1/order', orderRoute)
app.use('/v1/emailVerification', emailRoute)
app.use('/v1/cart', cartRoute)
app.use('/v1/history', historyRoute)

// stripe payment
app.post('/v1/purchase', function(req, res) {
    const { amount, source, description, amountToIDR } = req.body
    stripe.charges.create({
        amount: amount,
        source: source,
        currency: 'usd',
        description: JSON.stringify(description)
      }).then(function() {
        console.log('Charge Successful')
        res.json({ message: 'Successfully purchased items' })
      }).catch(function(error) {
        console.log(error)
        console.log('Charge Fail')
        res.status(500).end()
      })
})

app.use('/upload', express.static('./uploads'))

// Default Response Unknown End-Point
app.use('*', (req, res) => {
})

// Error Handling
app.use((err, req, res, next) => {
    response(res, null, { status: err.status || 'Failed', statusCode: err.statusCode || 400 }, { message: err.message })
})

app.listen(process.env.PORT, () => console.log('Server running on port : '+ process.env.PORT))