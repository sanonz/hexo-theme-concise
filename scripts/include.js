const fs = require('fs');
const path = require('path');

hexo.extend.helper.register('include', function (options) {
  const filepath = path.join(hexo.theme.base, options.path);
  let stat = null;
  try {
    stat = fs.statSync(filepath);
  } catch(e) {}

  let content = '';
  if (stat) {
    content = fs.readFileSync(filepath).toString();

    if (!content) {
      console.warn('Include file empty.');
    }
  } else {
    console.warn('Include file \'' + options.path + '\' not found.');
  }

  return content;
});