const Post = require('@models/post')
const Joi = require('joi')

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

  try {
    const post = await Post.write(req.body)
    res.json(post)
  } catch (e) {
    console.error(e)
    res.status(500)
  }
}
