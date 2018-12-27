const Post = require('@models/post')
const CustomError = require('@error')

module.exports = async (req, res, next) => {
  const { id } = req.params
  try {
    await Post.findByIdAndRemove(id).exec()
    res.sendStatus(204)
  } catch (e) {
    res.status(500)
    next(e)
  }
}
