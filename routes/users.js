const express = require('express');
const { logoutUser } = require('../auth');

const db = require('../db/models')
const { requireAuth, loggedIn } = require('../auth');
const router = express.Router()

const { Channel } = db;


const { csrfProtection, asyncHandler } = require('./util');

router.get('/', asyncHandler(async (req, res) => {
  const channels = await db.Channel.findAll({
   
  })
    
  const logged = loggedIn(req, res)
    res.render('users', {
      logged,channels
  });
}))

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/index')
});


module.exports = router;
