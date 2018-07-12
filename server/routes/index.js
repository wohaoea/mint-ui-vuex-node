var express = require('express');
var router = express.Router();

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

module.exports = router;
