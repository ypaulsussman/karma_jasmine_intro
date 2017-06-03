var express = require('express');
var router = express.Router();

// var result = {};

router.post('/', function(req, res) {
  var integerList = req.body.integerList;
  res.send(integerList);
});

module.exports = router;
