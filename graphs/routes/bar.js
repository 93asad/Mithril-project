var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bar', { title: 'Express' });
});

module.exports = router;
