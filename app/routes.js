//require express
var express = require('express');
var path = require('path')

//create a router object
var router = express.Router()

//export router so we can use in our server.js file
module.exports = router;

//route for our Homepage
router.get('/', function(req, res){
    res.render('pages/index');
});

//route for our About Me page
router.get('/about', function(req, res){
    res.render('pages/about');
});

//route for our Contact page
router.get('/contact', function(req,res){
    res.render('pages/contact');
});

router.post('/contact', function(req,res){
    res.send('Thanks for contacting us! We will get back to you soon.')
});
