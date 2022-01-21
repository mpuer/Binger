const express = require('express');
const { logoutUser } = require('../auth');

const db = require('../db/models')
const { requireAuth, loggedIn } = require('../auth');
const router = express.Router()

const { csrfProtection, asyncHandler } = require('./util');

router.get('/', function(req, res) {
  const logged = loggedIn(req, res)
    res.render('users', {
    logged,
  });
});

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/index')
});

module.exports = router;
