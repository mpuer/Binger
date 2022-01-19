const express = require('express')

const db = require('../db/models')

const router = express.Router()

const { csrfProtection, asyncHandler } = require('./util');

router.get('/', function(req, res) {
  res.render('login', {title: 'login'});
});

module.exports = router;
