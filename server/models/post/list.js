module.exports = function({ cursor, tag }) {
  const query = Object.assign(
    {},
    cursor ? { _id: { $lt: cursor } } : {},
    tag ? { tag } : {}
  )

  return this.find(query)
    .sort({ _id: -1 })
    .limit(6)
    .exec()
}
