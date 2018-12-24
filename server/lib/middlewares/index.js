const mongoose = require('mongoose')
const {
  Types: { ObjectId }
} = mongoose

exports.checkObjectId = (req, res, next) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) {
    res.sendStatus(400)
    return null
  }
  return next()
}

exports.checkLogin = (req, res, next) => {
  const { logged } = req.session
  if (!logged) {
    res.status(401)
    return null
  }
  return next()
}

exports.checkCursor = (req, res, next) => {
  const { cursor } = req.params
  if (cursor && !ObjectId.isValid(cursor)) {
    res.sendStatus(400)
    return
  }
  return next()
}
