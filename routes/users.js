const express = require('express');
const { logoutUser } = require('../auth');

const db = require('../db/models')
const { requireAuth, loggedIn } = require('../auth');
const router = express.Router()

const { Channel } = db;
const { Tvshow } = db;


const { csrfProtection, asyncHandler } = require('./util');

router.get('/', asyncHandler(async (req, res) => {
  const channels = await db.Channel.findAll();
  const shows = await db.Tvshow.findAll();

  const logged = loggedIn(req, res)
    res.render('users', {
      logged, channels, shows
  });
}))

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/')
});

router.post('/', asyncHandler(async (req, res) => {
  const logged = loggedIn(req, res)

  const { channelName, showId } = req.body;
  // Get channel ie scary shows
  const photo = null;
  const channel = await Channel.create({"title": "Not Not Really a Cool Show", "tvShowId": 4, photo});
  console.log(`its here!!!!!!!!!!!!!`, channel)
  const shows = await db.Tvshow.findAll({
    include: [{
      model: Channel,
      required: true,
      where: {title: "Not Not Really a Cool Show"}
    }]
  });

  // add tvshowId to that channel
  // pull all tvshowIds from channel
  // render tvshow.title in our pug

  res.render('users', {
    logged, shows, channel
  });

}));



module.exports = router;
