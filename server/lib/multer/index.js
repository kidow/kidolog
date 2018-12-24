const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')
const path = require('path')

module.exports = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.BUCKET,
    key(req, file, cb) {
      cb(
        null,
        `original/${Number(new Date())}${path.basename(file.originalname)}`
      )
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 }
})
