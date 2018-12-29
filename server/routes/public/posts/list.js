const Post = require('@models/post')
const CustomError = require('@error')

module.exports = async (req, res, next) => {
  const { cursor, tags } = req.query

  let posts = null
  try {
    posts = await Post.list({ cursor, tags })
  } catch (e) {
    console.error(e)
    res.status(500)
  }

  const nextUrl =
    posts.length === 6
      ? `/posts/?${tags ? `tags=${tags}&` : ''}cursor=${posts[5]._id}`
      : null

  res.json({ next: nextUrl, posts })
}
