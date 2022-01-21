var express = require('express');
var router = express.Router();
const { requireAuth, loggedIn } = require('../auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  const logged = loggedIn(req, res)
    res.render('home', {
    logged,
  });
});
module.exports = router;
