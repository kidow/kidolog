const mongoose = require('mongoose')

const Account = new mongoose.Schema({
  email: String,
  password: String,
  profile: {
    displayName: String,
    thumbnail: {
      type: String,
      default: '/static/images/default_thumbnail.png'
    }
  },
  social: {
    facebook: {
      id: String,
      accessToken: String
    },
    google: {
      id: String,
      accessToken: String
    }
  }
})
