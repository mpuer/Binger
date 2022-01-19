const express = require('express')

const db = require('../db/models')

const router = express.Router()

const { csrfProtection, asyncHandler } = require('./util');

router.get('/', asyncHandler(async (req, res) => {
    res.render('sign-in', {title: 'Sign in'})
}))

module.exports = router
