const express = require('express')

const db = require('../db/models')

const router = express.Router()

const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', asyncHandler(async (req, res) => {
    res.render('sign-up', {title: 'Sign Up'})
}))

module.exports = router
