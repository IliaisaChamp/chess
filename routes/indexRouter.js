var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chess School' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Chess School' });
});

module.exports = router;
