module.exports = function({ title, markdown, tags }) {
  const post = new this({ title, markdown, tags })
  return post.save()
}
