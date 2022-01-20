const express = require('express')

const db = require('../db/models')

const router = express.Router()

const { csrfProtection, asyncHandler } = require('./util');

router.get('/', asyncHandler(async (req, res) => {
    const { keyword, cartoons, comedy, documentary, drama, educational, romance, scary } = req.body;


    res.render('browse', {title: 'Browse'})
}))

module.exports = router
