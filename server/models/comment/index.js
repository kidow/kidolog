const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema
const Comment = new Schema(
  {
    displayName: {
      type: ObjectId,
      ref: 'Account'
    },
    postId: {
      type: ObjectId,
      ref: 'Post'
    },
    comment: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Comment', Comment)
