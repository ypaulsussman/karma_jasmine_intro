//requires and globals
//calls functionality of the express framework
var express = require('express');
//makes that functionality accessible as an object
var app = express();
//calls functionality of the path module
var path = require('path');
//calls functionality of the body-parser module
var bodyParser = require('body-parser');
//calls functionality of the calculate module
var calculate = require('./modules/calculate.js');

//sets the port
var port = 5001;

//enables serving static files directly from the "public" directory
app.use(express.static('server/public'));
//extracts body portion of incoming requests; exposes it as "req.body" object
app.use(bodyParser.urlencoded({extended: true}));
// when you make a request along the /calculate path,
      //this enables the functions inside the 'calculate' variable (i.e. the module above)
app.use('/calculate', calculate);


//returns "index.html" when client requests along top-level path
app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

//enables server to field requests from client
app.listen(port,function() {
  console.log('listening on port', port);
});
