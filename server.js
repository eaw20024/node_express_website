var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Use Body Parser 
app.use(bodyParser.urlencoded({ extended: true }));

//Route my App folder
var router = require('./app/routes');
app.use('/', router);

//Routing our public folder (css and images)
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('App Started')
});
