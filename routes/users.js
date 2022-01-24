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
  if (!req.session.auth) { res.redirect("sign-in")}
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
  console.log('This is logged variable:', logged)
  const { userId } = req.session.auth;
  console.log('this is userId variable:', userId)

  const { channelName, showId } = req.body;
  console.log('this is channelName variable:', channelName)
  console.log('this is showId variable:', showId)
  const channel = await Channel.create({ "title": channelName , "tvShowId": showId, "coverPicture": null });
  console.log('this is channel variable:', channel)
  const channelId = channel.id;
  console.log('this is channelId variable:', channelId)
  await Usershow.create({ "channelId": channelId, "usersId": userId });

  const userChannels = await Channel.findAll({
    include: [{
      model: User,
      required: true,
      where: { id: userId }
    }]
  });

  console.log('this is userChannels variable:', userChannels)

  const channelNames = userChannels.map(el => el.dataValues.title)
  console.log('this is channelNames variable:', channelNames)

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

  console.log('this is channelInput variable:', channelInput)

  const labels = Object.keys(channelInput);

  console.log('this is labels variable:', labels)


  res.render('users', {
    logged, channelInput, labels
  });

}));



module.exports = router;
