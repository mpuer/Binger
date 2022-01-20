const express = require('express')

const db = require('../db/models')

const { Tvshow } = db;

const { Op } = require('sequelize');

const router = express.Router()

const { csrfProtection, asyncHandler } = require('./util');

router.get('/', asyncHandler(async (req, res) => {
    const { keyword } = req.body;
    const data = req.body;
    const array = Object.values(data);

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
        tvShows = await Tvshow.findAll({
            where: {
                genre: {
                    [Op.or]: array
                }
            }
        })
    }


    res.render('browse', tvShows, {title: 'Browse'})
}))

module.exports = router
