const multer = require('multer')
const multerS3 = require('multer-s3')
const s3 = require('@aws')
const CustomError = require('@error')

module.exports = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function(req, file, cb) {
      let { path, contactId, accountName } = req.body
      let s3Path = path || `temp/${Date.now().toString()}`
      if (path === 'certification') {
        s3Path = `${path}/${contactId}_${accountName}_${Date.now().toString()}`
      }

      cb(null, s3Path)
    }
  }),
  fileFilter: (_, file, cb) => {
    if (file.mimetype.indexOf('image/') !== -1) {
      cb(null, true)
    } else {
      cb(null, false)
      cb(new CustomError('이미지 형식의 파일이 아닙니다'))
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }
})
