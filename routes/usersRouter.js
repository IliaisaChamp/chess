const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');

const isAuth = require('../middleware/userMiddleware.js');

//не забыть мидлвар
router
  .route('/signin')
  .post(UserController.signin);

router
  .route('/signup')
  .post(UserController.create);


router.route('/logout').get(UserController.logout);

module.exports = router;
