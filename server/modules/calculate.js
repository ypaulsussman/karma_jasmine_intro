var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  var integerList = req.body.integerList;

//converts list to array of numbers
  integerList = integerList.map(function(item) {
    return parseInt(item, 10);
  });

  //creates array to hold run-element indices
  var results = [];

  //iterates over list
  for (var i = 0; i < integerList.length-2; i++) {
    //adds index to 'results' if current item begins a three-item increment
    if (checkIncrement(i)) {
      results.push(i);
    //adds index to 'results' if current item begins an three-item decrement
  } else if (checkDecrement(i)) {
      results.push(i);
    }
  }

  //compares three serial array items for incrementation
  function checkIncrement(i) {
    if (integerList[(i+1)] === (integerList[i])+1 && integerList[(i+2)] === (integerList[i])+2) {
      return true;
    }
  }

  //compares three serial array items for decrementation
  function checkDecrement() {
    if (integerList[(i+1)] === (integerList[i])-1 && integerList[(i+2)] === (integerList[i])-2) {
      return true;
    }
  }

  res.send(results);
});

module.exports = router;
