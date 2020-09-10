const crypto = require('crypto');

hexo.extend.helper.register('md5', function (str) {
  return crypto.createHash('md5').update(str).digest('hex');
});