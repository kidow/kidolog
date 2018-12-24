const mongoose = require('mongoose')
const {
  Types: { ObjectId }
} = mongoose

exports.checkObjectId = (req, res, next) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) {
    res.status(400)
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
