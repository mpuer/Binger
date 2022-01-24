const express = require('express')

const db = require('../db/models')

const { Tvshow } = db;
const { Channel } = db;
const {loginUser, loggedIn} = require('../auth')
const { Op } = require('sequelize');
const router = express.Router()

const { csrfProtection, asyncHandler } = require('./util');

router.post('/', asyncHandler(async (req, res) => {
    const { keyword } = req.body;

    const channels = await Channel.findAll();


    const data = req.body;
    const array = Object.keys(data);

    let tvShows;

    if (keyword) {
        array.shift()
        tvShows = await Tvshow.findAll({
            where: {
                [Op.and]: [
                    { name: { [Op.iLike]: `%${keyword}%`} },
                    { genre: { [Op.or]: array }}
                ]
            }
        })

    }

    else {
        array.shift()
        tvShows = await Tvshow.findAll({
            where: {
                genre: {
                    [Op.or]: array
                }
            }
        })
    }
    const logged = loggedIn(req, res)
    res.render('browse', {
        logged,
        tvShows,
        channels
  });
}))

module.exports = router
