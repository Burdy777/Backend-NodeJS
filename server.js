const http = require('http');
const url = require('url');
const queryString = require('querystring');
var eventEmitter = require('events').EventEmitter;
const routing = require('./routing')


var server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const param = queryString.parse(url.parse(req.url).query)

  routing.getPage(page, res, param.prenom);
  res.end();
});







server.listen(8889);