const posts = require('express').Router()
const { checkObjectId, checkLogin } = require('@middle')
const upload = require('@multer')

posts.post('/', checkLogin, require('./write'))
posts.post('/image', checkLogin, upload.single('img'), require('./image'))
posts.delete('/:id', checkLogin, checkObjectId, require('./remove'))
posts.patch('/:id', checkLogin, checkObjectId, require('./update'))

module.exports = posts
