module.exports = function({ cursor, tags, search }) {
  const query = Object.assign(
    {},
    cursor ? { _id: { $lt: cursor } } : {},
    tags ? { tags } : {},
    search ? { title: new RegExp(search) } : {}
  )

  return this.find(query)
    .sort({ _id: -1 })
    .limit(6)
    .exec()
}
