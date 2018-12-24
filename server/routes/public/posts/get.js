const Post = require('@models/post')

module.exports = async (req, res, next) => {
  const { tags } = req.query
  const query = tags ? { tags } : {}
  try {
    const posts = await Post.find(query)
    res.json(posts)
  } catch (e) {
    console.error(e)
    next(e)
  }
}
