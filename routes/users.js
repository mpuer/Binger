const express = require('express')

const db = require('../db/models')

const router = express.Router()

const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', function(req, res) {
  res.render('profile', {title: 'profile'});
});

module.exports = router;
