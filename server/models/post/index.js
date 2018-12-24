const mongoose = require('mongoose')

const Post = new mongoose.Schema(
  {
    title: String,
    markdown: String,
    tags: [String]
  },
  { timestamps: true }
)

Post.statics.write = function({ title, markdown, tags }) {
  const post = new this({ title, markdown, tags })
  return post.save()
}

Post.statics.list = function({ cursor, tag }) {}

module.exports = mongoose.model('Post', Post)
