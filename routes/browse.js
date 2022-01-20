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

    if (keyword) {
        array.shift()
        const tvShows = await Tvshow.findAll({
            where: {
                [Op.and]: [
                    { name: { [Op.iLike]: `%${keyword}%`} },
                    { genre: { [Op.or]: array }}
                ]
            }
        })

    }


    res.render('browse', {title: 'Browse'})
}))

module.exports = router
