require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const { PORT: port = 4000, HOST: host = '127.0.0.1' } = process.env
// const connect = require('./models')

const app = express()
// connect()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`App listening on ${host} and PORT ${port}!`)
})
