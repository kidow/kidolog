const Post = require('@models/post')

module.exports = async (req, res, next) => {
  const { id } = req.params
  try {
    await Post.findByIdAndRemove(id).exec()
    res.status(204)
  } catch (e) {
    res.status(500)
    next(e)
  }
}
