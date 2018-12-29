const Post = require('@models/post')

module.exports = async (req, res, next) => {
  const { cursor, tags, search } = req.query

  let posts = null
  try {
    posts = await Post.list({ cursor, tags, search })
  } catch (err) {
    return next(err)
  }

  const nextUrl =
    posts.length === 6
      ? `/posts/?${tags ? `tags=${tags}&` : ''}cursor=${posts[5]._id}${
          search ? `&search=${search}` : ''
        }`
      : null

  res.json({ next: nextUrl, posts })
}
