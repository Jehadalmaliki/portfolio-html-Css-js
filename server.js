var express = require('express');
var app = express();
const port=process.env.port || 3000
app.use(express.static('views/pages'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

  

app.listen(port);
console.log('Server is listening on port 3000');