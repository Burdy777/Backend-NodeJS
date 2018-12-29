var createError = require('http-errors');
var express = require('express');
var router = express.Router();

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  next(createError(404));
},
// error handler
(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = 'Noooooooooooooooooooooooooooooooon.... Une erreur !';
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})
);



module.exports = router;