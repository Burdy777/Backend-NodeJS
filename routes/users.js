var express = require('express');
var router = express.Router();

router.param('id', (req, res, next, id) => {
  if(isNaN(id)) next(new Error(id + 'not a number.. dead!'));
  next('route');
})

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/me/:id?', function(req, res, next) {
  var User = {user:' Burdy',numero:req.params['id'], title:'Express'};
  res.render('oneUser', User);
});


module.exports = router;
