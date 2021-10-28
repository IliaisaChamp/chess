let express = require('express');
let router = express.Router();
const TestsController = require('../controllers/testsController.js');

router.route('/').get(TestsController.getTest);

router.route('/chess-test').get((req, res) => {
  res.render('chess-test');
});

router
  .route('/create-test')
  .get((req, res) => {
    res.render('create-test');
  })
  .post(TestsController.createTest);

module.exports = router;
