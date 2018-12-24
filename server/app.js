require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { PORT: port = 4000, HOST: host = '127.0.0.1', COOKIE_KEY: cookieKey } = process.env
// const connect = require('./models')

require('./lib/moduleAlias')
const app = express()
// connect()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(cookieKey))
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: cookieKey,
    cookie: {
      maxAge: true,
      httpOnly: true,
      secure: false
    }
  })
)

app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`App listening on ${host} and PORT ${port}!`)
})
