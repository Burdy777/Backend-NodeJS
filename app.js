var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var indexRouterModule = require('./routes/index');
var productsRouterModule = require('./routes/products-routing');
var errorRouterModule = require('./routes/error')

var app = express();

// connexion a base de donnée

// Set up mongoose connection
let dev_db_url = 'mongodb://products:Burdy77*@ds235022.mlab.com:35022/products';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// router module utilisé
app.use('/products', productsRouterModule);
app.use('/', indexRouterModule);
app.use(errorRouterModule)

module.exports = app;
