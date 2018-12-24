const Post = require('@models/post')
const CustomError = require('@error')

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    markdown: Joi.string().required(),
    tags: Joi.string().empty('')
  })

  const result = Joi.validate(req.body, schema)

  if (result.error) {
    console.error(result.error)
    res.sendStatus(400)
    return
  }

  const { id } = req.params

  try {
    const post = await Post.findByIdAndUpdate(id, req.body, {
      new: true
    }).exec()
    if (!post) {
      res.status(404)
      res.json({ message: '404 Not Found' })
    }
    res.json(post)
  } catch (e) {
    res.status(500)
    next(e)
  }
}
