const Post = require('@models/post')
const CustomError = require('@error')

module.exports = async (req, res, next) => {
  const { cursor, tags, search } = req.query

  let posts = null
  try {
    posts = await Post.list({ cursor, tags, search })
  } catch (e) {
    console.error(e)
    res.status(500)
  }

  const nextUrl =
    posts.length === 6
      ? `/posts/?${tags ? `tags=${tags}&` : ''}cursor=${posts[5]._id}${
          search ? `&search=${search}` : ''
        }`
      : null

  res.json({ next: nextUrl, posts })
}
