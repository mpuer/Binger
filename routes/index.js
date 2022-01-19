var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'a/A Express Skeleton Home' });
=======

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Home' });
>>>>>>> userlogin
});

module.exports = router;
