require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors') 
const usersRoute = require('./src/routers/users')

// Using CORS
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'))

// Grouping End-Point
app.use('/v1/users', usersRoute)

// Default Response Unknown End-Point
app.use('*', (req, res) => {
    console.log('Tes')
})

// Error Handling
app.use((err, req, res, next) => {

})

app.listen(process.env.PORT, () => console.log('Server running on port : '+ process.env.PORT))