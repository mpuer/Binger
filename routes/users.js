const express = require('express');
const { logoutUser } = require('../auth');

const db = require('../db/models')
const { requireAuth, loggedIn } = require('../auth');
const router = express.Router()

const { Channel } = db;
const { Tvshow } = db;
const { Usershow } = db;
const { User } = db;


const { csrfProtection, asyncHandler } = require('./util');
const e = require('express');

router.get('/', asyncHandler(async (req, res) => {
  const { userId } = req.session.auth;

  const userChannels = await Channel.findAll({
    include: [{
      model: User,
      required: true,
      where: { id: userId }
    }]
  });

  const channelNames = userChannels.map(el => el.dataValues.title)

  const channelInput = {};

  for (let i = 0; i < channelNames.length; i++) {
    let channel = channelNames[i]
    const shows = await db.Tvshow.findAll({
      include: [{
        model: Channel,
        required: true,
        where: { title: `${channel}` }
      }]
    });
    channelInput[`${channel}`] = shows;
  }

  const labels = Object.keys(channelInput);


  const logged = loggedIn(req, res);
  res.render('users', {
    logged, channelInput, labels
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

  const channel = await Channel.create({ "title": `Binger${userId}'s ` + channelName + ' channel:', "tvShowId": showId, "coverPicture": null });
  const channelId = channel.id;
  const userShow = await Usershow.create({ "channelId": channelId, "usersId": userId });

  const userChannels = await Channel.findAll({
    include: [{
      model: User,
      required: true,
      where: { id: userId }
    }]
  });

  const channelNames = userChannels.map(el => el.dataValues.title)

  const channelInput = {};

  for (let i = 0; i < channelNames.length; i++) {
    let channel = channelNames[i]
    const shows = await db.Tvshow.findAll({
      include: [{
        model: Channel,
        required: true,
        where: { title: `${channel}` }
      }]
    });
    channelInput[`${channel}`] = shows;
  }

  const labels = Object.keys(channelInput);


  res.render('users', {
    logged, channelInput, labels
  });

}));



module.exports = router;
