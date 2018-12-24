const posts = require('express').Router()
const { checkObjectId } = require('@middle')

posts.get('/', require('./list'))
posts.get('/:id', checkObjectId, require('./get'))

module.exports = posts
