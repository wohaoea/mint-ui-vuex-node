var express = require('express');
var router = express.Router();
var wsclient = require('../common/wsclient')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  res.send({
    resultCode: '000001',
    data: [{
      id: 1,
      count: 0
    }],
    msg: "it's ok"
  })
});

router.get('/api/getMovie', function(req, res, next) {
  wsclient.hotMovie({
    count: 8
  }, function(result) {
    res.send(result)
  })
})

module.exports = router;
