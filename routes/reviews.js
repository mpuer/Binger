const express = require('express')

const db = require('../db/models')
const { requireAuth } = require('../auth');
const router = express.Router()

const { csrfProtection, asyncHandler } = require('./util');

router.get('/', asyncHandler(async (req, res) => {
    res.render('reviews', {title: 'Reviews'})
}))

module.exports = router
