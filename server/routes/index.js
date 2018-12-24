const router = require('express').Router()

const auth = require('./auth')
const posts = require('./posts')

app.use('/auth', auth)
app.use('/posts', posts)

module.exports = router
