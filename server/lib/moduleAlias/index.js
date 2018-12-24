const moduleAlias = require('module-alias')

moduleAlias.addAliases({
  '@lib': __dirname + '/../../lib',
  '@middle': __dirname + '/../../lib/middlewares'
})
