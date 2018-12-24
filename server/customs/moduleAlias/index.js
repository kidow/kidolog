const moduleAlias = require('module-alias')

moduleAlias.addAliases({
  '@customs': __dirname + '/../../customs',
  '@middle': __dirname + '/../../customs/middlewares'
})
