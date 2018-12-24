const Post = require('@models/post')

module.exports = async (req, res, next) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) {
    res.sendStatus(400)
    return
  }
  try {
    const post = await Post.findById(id).exec()
    if (!post) {
      res.sendStatus(404)
      return
    }
    res.json(post)
  } catch (e) {
    res.status(500)
    next(e)
  }
}
