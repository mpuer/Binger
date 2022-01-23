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

  const channel = await Channel.create({ "title": channelName + ` ${userId}`, "tvShowId": showId, "coverPicture": null });
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
    console.log(shows);
  }
  console.log('Over Here!!!!!!!!!!!!!!!!!', channelInput);
  const labels = Object.keys(channelInput)
  console.log(labels);




  // const result = (async () => {

  //   for (let e of channelNames) {
  //     const shows = await db.Tvshow.findAll({
  //           include: [{
  //             model: Channel,
  //             required: true,
  //             where: {title: `${e}`}
  //           }]
  //     });
  //     channelInput[`${channel}`] = shows;
  //   }
  //   return channelInput;
  // })();



  // const buildOject = async (channel) => {
  //   const shows = await db.Tvshow.findAll({
  //     include: [{
  //       model: Channel,
  //       required: true,
  //       where: {title: `${channel}`}
  //     }]
  //   });
  //   channelInput[`${channel}`] = shows;
  // }

  // for (let i = 0; i < channelNames.length; i++) {
  //   buildOject(channelNames[i]);
  // }

  // console.log(channelInput)

  // channelNames.forEach(async (channel) => {
  //   console.log(channel);
  //   const shows = await db.Tvshow.findAll({
  //     include: [{
  //       model: Channel,
  //       required: true,
  //       where: {title: `${channel}`}
  //     }]
  //   });
  //   channelInput[`${channel}`] = shows;
  //   console.log('Over here!!!!!!!!!!!!!', channelInput)
  // });

  // const shows = await db.Tvshow.findAll({
  //   include: [{
  //     model: Channel,
  //     required: true,
  //     where: {title: channelName + ` ${userId}`}
  //   }]
  // });

  res.render('users', {
    logged, channelInput, labels
  });

}));



module.exports = router;
