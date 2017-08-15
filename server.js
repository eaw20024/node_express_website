var express = require('express');
var app = express();
var port = 8080;

//Route my App folder
var router = require('./app/routes');
app.use('/', router);

//Routing our public folder (css and images)
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('App Started')
});
