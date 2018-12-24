const posts = require('express').Router()

posts.post('/', require('./write'))
posts.delete('/:id', require('./remove'))
posts.patch('/:id', require('./update'))

module.exports = posts
