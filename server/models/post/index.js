const mongoose = require('mongoose')

const Post = new mongoose.Schema(
  {
    title: String,
    markdown: String,
    tags: [String]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', Post)
