var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
      {
          user: 'userOne'
      },
      {
          user: 'userTwo'
      }
      ]);
});

router.get('/cool', function(req, res, next) {
  res.send('you\'re so cool and now it\'s been edited');
});

module.exports = router;
