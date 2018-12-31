var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/product.controller');

router.param('id', (req, res, next, id) => {
  if(isNaN(id)) next(new Error(id + 'not a number.. dead!'));
  next();
})

/* GET products listing. */
router.get('/', product_controller.test);

/* POST products listing. */
router.post('/add', product_controller.product_add);

/* PUT products listing. */
router.put('/update', product_controller.product_update);

router.delete('/delete', product_controller.product_delete);


// router.get('/me/:id?', function(req, res, next) {
//   const product = {};
//   res.render('oneProduct', product);
// });


module.exports = router;
