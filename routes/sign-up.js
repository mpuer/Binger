const express = require('express')

const db = require('../db/models')

const router = express.Router()

const bcrypt = require('bcryptjs')
const {loginUser} = require('../auth')

const { csrfProtection, asyncHandler } = require('./util');
const { check, validationResult } = require('express-validator');

router.get('/', csrfProtection, (async (req, res) => {
    const user = db.User.build();
    res.render('sign-up', {
        title: 'Sign Up',
        user,
        csrfToken: req.csrfToken(),
    })
}))

const signupValidators = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('User name cannot be blank')
        .isLength({ max: 20 })
        .withMessage('User name cannot be more than 20 characters'),

    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Password cannot be blank')
        .isLength( {min: 5} )
        .withMessage('Password must be longer than 5 characters'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Password cannot be blank')
        .isLength( {min: 5} )
        .withMessage('Password must be longer than 5 characters')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
            throw new Error('Passwords must match');
            }
            return true;
    }),
]

router.post('/', csrfProtection, signupValidators,
    asyncHandler(async (req, res) => {
        const {
            username,
            password
        } = req.body

        const user = db.User.build({
            username,
        })

        const validatorErrors = validationResult(req)

        if (validatorErrors.isEmpty()) {
            const hashedPassword = await bcrypt.hash(password, 12);
            user.hashedPassword = hashedPassword;
            await user.save();
            loginUser(req, res, user);
            res.redirect('/users');
          } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render('sign-up', {
              title: 'Sign Up',
              user,
              errors,
              csrfToken: req.csrfToken(),
        })
    }
}))


module.exports = router;
