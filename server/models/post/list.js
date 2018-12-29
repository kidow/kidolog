module.exports = function({ cursor, tags }) {
  const query = Object.assign(
    {},
    cursor ? { _id: { $lt: cursor } } : {},
    tags ? { tags } : {}
  )

  return this.find(query)
    .sort({ _id: -1 })
    .limit(6)
    .exec()
}
