const router = require('express').Router()

const posts = require('./posts')

app.use('/posts', posts)

module.exports = router
