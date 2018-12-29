var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouterModule = require('./routes/index');
var usersRouterModule = require('./routes/users');
var errorRouterModule = require('./routes/error')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var option = {
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}
app.use(express.static(path.join(__dirname, 'public'),option));

// router module utilisé
app.use('/users', usersRouterModule);
app.use('/', indexRouterModule);
app.use(errorRouterModule)

module.exports = app;
