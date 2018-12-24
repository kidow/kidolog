const Joi = require('joi')

module.exports = async (req, res, next) => {
  const { password } = req.body

  if (Joi.validate(password, Joi.string().required()).error) {
    console.log(result.error)
    res.sendStatus(400)
    return
  }

  if (password === process.env.PASSWORD) {
    req.session.logged = true
    res.json({ success: true })
  } else {
    next()
  }
}
