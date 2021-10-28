let express = require('express');
let router = express.Router();



router.route('/chess-test')
.get((req, res) => {
  res.render('chess-test');
});
module.exports = router
