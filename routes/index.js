var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index.html', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../views/index.html'));
});
router.get('/contact.html', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../views/contact.html'));
});
router.get('/about.html', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../views/about.html'));
});

module.exports = router;
