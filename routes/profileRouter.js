const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profileController');


router.route('/').get(ProfileController.render);

module.exports = router;
