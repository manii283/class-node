var http = require('http');
var uc = require('upper-case');
var lc = require('lower-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.write(lc.lowerCase("MANISHA"));
  res.end();
}).listen(8000);