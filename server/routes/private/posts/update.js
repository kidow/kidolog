const Post = require('@models/post')
const CustomError = require('@error')
const Joi = require('joi')

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    markdown: Joi.string().required(),
    tags: Joi.array()
      .items(Joi.string())
      .required()
  })

  const result = Joi.validate(req.body, schema)

  if (result.error) {
    next(new CustomError('Joi error', 0, 400))
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
