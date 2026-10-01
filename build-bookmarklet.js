const fs = require('fs');
const src = fs.readFileSync(__dirname + '/detector.js', 'utf8') + '\n' + fs.readFileSync(__dirname + '/scan.js', 'utf8');
fs.writeFileSync(__dirname + '/bookmarklet.txt', 'javascript:' + encodeURIComponent('(function(){' + src + '})();'));
