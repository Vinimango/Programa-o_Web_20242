var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('nigga');
});

router.get('/signin', function(req, res, next) {
  res.send('nigga2');
});

router.get('/signup', function(req, res, next) {
  res.send('nigga3');
});
module.exports = router;
