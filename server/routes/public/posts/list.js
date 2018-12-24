const Post = require('@models/post')

module.exports = async (req, res, next) => {
  const { cursor, tag } = req.query

  let posts = null
  try {
    posts = await Post.list({ cursor, tag })
  } catch (e) {
    console.error(e)
    res.status(500)
  }

  const next =
    posts.length === 6
      ? `/posts/?${tag ? `tag=${tag}&` : ''}cursor=${posts[5]._id}`
      : null

  res.json({ next, posts })
}
