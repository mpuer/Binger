const express = require('express')

const db = require('../db/models')

const router = express.Router()
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./util');

router.get('/', asyncHandler(async (req, res) => {
    res.render('channels', {title: 'Channels'})
}))

module.exports = router
