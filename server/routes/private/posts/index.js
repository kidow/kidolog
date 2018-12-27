const posts = require('express').Router()
const { checkObjectId, checkLogin } = require('@middle')

posts.post('/', checkLogin, require('./write'))
posts.delete('/:id', checkLogin, checkObjectId, require('./remove'))
posts.patch('/:id', checkLogin, checkObjectId, require('./update'))

module.exports = posts
