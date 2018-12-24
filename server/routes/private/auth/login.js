module.exports = async (req, res, next) => {
  const { password } = req.body
  if (password === process.env.PASSWORD) {
    req.session.logged = true
    res.json({ success: true })
  } else {
    next()
  }
}
