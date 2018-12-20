const mongoose = require('mongoose')

const { Schema } = mongoose
const { Types: { ObjectId } } = Schema
const Post = new Schema(
  {
    content: String,
    likeCount: String,
    likes: {
      type: [ String ],
      default: []
    },
    displayName: {
      type: ObjectId,
      ref: 'Account'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Post', Post)
