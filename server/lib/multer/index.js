const multer = require('multer')
const multerS3 = require('multer-s3')
const s3 = require('@aws')

module.exports = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET,
    key(req, file, cb) {
      console.log(req.body)
      console.log('file :', file)
      cb(null, file.originalname)
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 }
})
