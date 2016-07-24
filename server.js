var path = require('path');
var ideamarket = require('idearmarket');

ideamarket({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
});
