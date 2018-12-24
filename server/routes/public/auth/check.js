module.exports = async (req, res, next) => {
  res.json({ logged: req.session.logged })
}
