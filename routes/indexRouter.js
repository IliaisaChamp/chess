let express = require('express');
let router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Chess School' });
});

router.get('/profile', function (req, res, next) {
  res.render('profile', { title: 'Chess School' });
});

router.get('/create-test', function (req, res, next) {
  res.render('create-test');

});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Chess School' });
});


module.exports = router;


