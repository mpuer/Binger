const express = require('express')
const { check, validationResult } = require('express-validator');
const db = require('../db/models')
const bcrypt = require('bcryptjs');
const router = express.Router()
const {loginUser, loggedIn} = require('../auth')
const { Channel } = db;

const { csrfProtection, asyncHandler } = require('./util');

router.get('/', csrfProtection, (req, res) => {
  res.render('sign-in', {
    title: 'Sign In',
    csrfToken: req.csrfToken(),
  });
});

const loginValidators = [
  check('username')
    .exists({checkFalsy: true})
    .withMessage('User Name cannot be blank')
    .isLength({ max: 20 })
    .withMessage('User Name must not be more than 20 characters long'),
  check('password')
    .exists({checkFalsy: true})
    .withMessage('Password cannot be blank'),
]

router.post('/', csrfProtection, loginValidators,
  asyncHandler(async(req, res) => {
    const {
      username,
      password,
    } = req.body
    let errors = [];
    const channels = await db.Channel.findAll()

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {

      const user = await db.User.findOne({
        where: { username }
      })

      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString())
        if (passwordMatch) {
          loginUser(req, res, user)
          const logged = loggedIn(req, res)
          res.render('users', {
          logged, channels
          })
        }
      }
      errors.push('Login failed for the user and password provided')
    } else {
      errors = validatorErrors.array().map((error) => error.msg)
   }
   res.render('sign-in', {
     title: 'Sign In',
     username,
     errors,
     csrfToken: req.csrfToken()
   })
}))

module.exports = router;
