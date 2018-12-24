const posts = require('express').Router()
const { checkObjectId } = require('@middle')

posts.post('/', require('./write'))
posts.delete('/:id', checkObjectId, require('./remove'))
posts.patch('/:id', checkObjectId, require('./update'))

module.exports = posts
