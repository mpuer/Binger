const express = require('express');
const { logoutUser } = require('../auth');

const db = require('../db/models')
const { requireAuth, loggedIn } = require('../auth');
const router = express.Router()

const { Channel } = db;
const { Tvshow } = db;
const { Usershow } = db;


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
  const { userId } = req.session.auth;

  const { channelName, showId } = req.body;

  const channel = await Channel.create({"title": channelName, "tvShowId": showId, "coverPicture": null});
  const channelId = channel.id;
  const userShow = await Usershow.create({"channelId": channelId, "usersId": userId});
  const shows = await db.Tvshow.findAll({
    include: [{
      model: Channel,
      required: true,
      where: {title: channelName}
    }]
  });

  res.render('users', {
    logged, shows, channel
  });

}));



module.exports = router;
