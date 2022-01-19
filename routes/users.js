const express = require('express');
const { logoutUser } = require('../auth');

const db = require('../db/models')

const router = express.Router()

const { csrfProtection, asyncHandler } = require('./util');

router.get('/', function(req, res) {
  res.render('profile', {title: 'profile'});
});

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/home')
})

module.exports = router;
