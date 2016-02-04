var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express on Azure' });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});
/* GET Project page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Project Page' });
});
/* GET Service page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Service Page' });
});

module.exports = router;
